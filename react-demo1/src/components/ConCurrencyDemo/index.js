function Counter(){
  return {
    // <div>
    //   <span>hello world</span>
    //   <button>click me</button>
    // </div>
      type:"span",
      value:'hello world',
      next:{
        type:"button",
        value:'click me'
      }
  }
}

const CounterElementDescriptors = {
  type:'Function',
  fn:Counter
}

let presentWork = null //目前要做的工作
let rootElementDescriptor = null
let elementContainer = null

function performUnitOfWork(deadline){
  if(presentWork==null){

    console.log("prsentwork",presentWork,rootElementDescriptor)
    commitRoot(rootElementDescriptor)
    return;
  }

  //timeRemaining返回当前帧剩余时间
  if(deadline.timeRemaining()<10){//当前帧是否有额外的时间
    //没有任务时间了,就推入了下一帧（把本该一帧执行的任务分成多帧执行）
    requestIdleCallback(executeWorkLoop)
    return
  }
  
  if(presentWork.type==='Function'){//组件
    //保存根引用
    rootElementDescriptor = presentWork

    const fstChildren = presentWork.fn()
    console.log("children",fstChildren)

    //这个主要和fiber有关
    fstChildren.parent = presentWork
    presentWork.children = fstChildren

    //进入下一阶段工作
    //当前工作的元素从函数变成了第一个span元素
    presentWork = fstChildren;
    performUnitOfWork(deadline)

  }else{
    const dom = document.createElement(presentWork.type)
    dom.innerHTML = presentWork.value
    //不会马上渲染到页面上去--render阶段
    presentWork.dom = dom
    presentWork = presentWork.next
    performUnitOfWork(deadline)
  }
}

presentWork = CounterElementDescriptors

//deadline:当前帧是否还有空闲时间
function executeWorkLoop(deadline){
  performUnitOfWork(deadline)
}

//render阶段
function render(element){
  elementContainer = element
  presentWork = CounterElementDescriptors
  requestIdleCallback(executeWorkLoop)
}

//进入commit阶段
function commitRoot(_rootElement){
  console.log("进入commit阶段,开始挨个生成真实dom",_rootElement)
  let renderChildrenElements = _rootElement.children
  do{
    console.log("===renderChildrenElements",renderChildrenElements,renderChildrenElements.next)
    elementContainer.appendChild(renderChildrenElements.dom)
    renderChildrenElements = renderChildrenElements.next
  }while(renderChildrenElements)
}

render(document.getElementById("root"))

/**
 * 掉帧:某一帧花费时间超过预期时间【顶掉其他本该绘制的帧】
 * 
 * 浏览器一帧大概会做的事情 1.处理用户的交互事件【上一帧传递过来的用户对应事件的回调事件】 2.调用 requestAnimationFrame 3.执行重排重绘 4.调用 requestIdleCallback
 * 
 * 浏览器掉了一帧：这一帧不再进行重拍和重绘,这个页面直接没了，同时你所注册的 requestAnimationFrame 以及 requestIdleCallback 不再执行
 * 
 * 用户的交互事件还会执行吗？不会
 * 
 * 同样的代码量，Vue 在首屏的时候可能会掉帧（vue 一旦开始渲染，就不能停止）,但是 react 不会（react 调度机制、优先级概念、react 的渲染时可以终端的）
 * 
 * 
 * react 渲染原理
 * 2 个模块
 * --fiber 架构
 * --concurrency:concurrent mode[react18 以前的叫法,在 18 以后正式更名为 concurrency][并发性,可中断渲染]（实际上是对createElement的执行结果进行可中断化）
 *   具体实现：将一个大任务拆分成多个任务去执行,让每一帧的最大可渲染单元为组件
 *            优先级:将任务分为不同的优先级
 * 
 * 
 * react 渲染一个组件到页面需要做那些事情？
 * 首次渲染：
 * 1.拿到 React.createElement 所返回的 react 节点，最终会拿到一个树形结构的对象 （如果是组件也会生成对应的react节点，不过它的type值叫做component）
 * 2.会通过 render 方法进行渲染 
 * 3.一旦进入渲染
 *    --如果是组件节点，则会在执行过程中保存对应的 hooks 以及触发对应的 hooks【比如说像 useState 是要立即触发的，但是 useEffect 是要留存下来等到后续 dom 挂载完毕后,进行触发】
 *    --如果是 react 元素节点，不会生成真实的 Dom,而是生成一个描述对象【这个描述对象描述了当时要创建的真实dom的一些信息，以及这个描述对象要做的操作：'create'】,这个描述对象叫做fiber
 * 4.通过整个清单会依次将清单内部的东西编译成真实的dom,然后插入父节点的子节点（appendChild）
 * 5.等整个渲染流程结束后，得到一个完整的真实的 Dom，最后插入到对应的 root 元素下面 
 * 6.触发对应的生命周期事件
 * 
 * 更新：
 * 1.也会去生成一个新的 react 节点【状态、属性是否全变了】
 *   --它不会全部重新生成，他会看比如你是 Counter 的组件状态变化了，那么 Counter 及 Counter 以下的所有组件全部重新渲染【重新生成 react 节点】
 *   --直接进入 diff 阶段【diff 算法】比较以 Counter 节点为根元素的两棵树的差异【因为就算是组件重新渲染，也只是生成一个新的 react 节点对象，不一定意味着变化真实 dom】
 *   --diff算法完结以后，也会生成一个清单,这个清单里面是fiber,此时每个fiber节点的操作状态可以是【create、update、delete】中一个
 *   --最终将差异点应用到真实 Dom 上去
 *   --触发对应的生命周期函数
 * 
 * 只要我们元素或者组件写的够多，那么去执行react、createElement以及render这两个方法的事件就越长，如果浏览器一帧需要控制在16ms以内，如果超过了这个时间、就可能会掉帧、用户的交互会失败
 * 
 * 
 * 渲染就拆成两个阶段
 * 1.render阶段：我们把内部逻辑和react的内部逻辑都执行完，然后生成一个fiber清单【一个表格，在那些地方插入一些dom,那些地方删除一个dom】,以方便告诉下一个阶段到底要创建那些真实的dom
 * 2.commit阶段：将fiber清单转换为真实dom
 * 
 * render阶段的时候用户会看到什么?
 * 首次渲染：
 *   --render阶段:白屏 2-3s
 *   --整个页面都是由react写的，而且只有一个根组件，这种情况下用户是没法和页面交互的
 *   --这个页面只有一部分是由react接管和管理的，或者说整个页面由多个根组件，这种情况下用户是可以和页面交互的，因为不被react管理的地方可能已经渲染出来了
 * 
 * 更新时：
 * --render阶段：可以交互
 * 用户没法和页面交互，他是怎么造成掉帧啊？可以造成掉帧【但是由于界面本来就是白屏，用户压根感知不到掉帧】
 * 如果是第二种情况，就意味着当前被react接管的这一块地方还在工作【js引擎还在工作】,但是用户可以直接和该区域以外的其他dom进行交互，必然会造成掉帧，那么用户的输入事件就丢失了【这就是我们要处理的】
 * 
 * 更新时用户已经可以看到之前的画面了，那就意味着可以交互，可以交互，这时候你的render还在工作中，但是用户已经开始交互，那么必然会导致掉帧
 * 
 * 
 * 
 */
