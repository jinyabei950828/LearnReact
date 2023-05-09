import React ,{useCallback, useMemo, useState}from 'react'

/**
 * setState注意点:
 * 1.组件更新状态是异步的[当更改组件状态的函数执行以后，我们没有办法同步的马上得到他更新以后的值]
 * 2.如何拿到最新的状态呢？useEffect/useLayoutEffect
 * 
 * useState
 * 1.useState在调用的时候可以传递函数，也可以传递具体的值，
 * 如果传递的是函数，则会直接执行这个函数，将返回值作为初始化的状态，
 * 虽然在初始化的时候允许传递函数（纯函数），我们也尽量不要传递函数，因为初始化只会执行一次
 * 不仅需要纯函数,还得是没有任何参数【react在调用你的这个initial function的时候是不会给你传参数】
 * set Function是异步的,(不会立即更新),在react的下一次渲染阶段更新【commit render】
 * 
 * 
 * 
 * 2.useState会返回一个数组，里面有两个成员
 * --以初始化为值的变量
 * --修改该变量的函数，这个函数的调用会导致函数组件的重新运行
 *    --调用该函数的时候，可以直接传递一个值，也可以传递一个函数，如果你传递的是一个函数，则react会将上一次的状态传递给你，
 *      帮助你进行计算，如果你传递的是一个函数，react会将这个函数放到一个队列里面等待执行，那也就是如果我们想每次都稳稳的
 *      拿到上一次的值，我们得写成一个函数
 * 3.状态得更新是批量进行的
 * 
 * React中的属性范围内为标签属性和组件属性
 * 1.传递给组件的自然就是组件属性
 * 2.传递给jsx的标签元素的属性就叫做标签属性【标签属性:在html中有明确的对标元素就叫做标签元素】
 *   标签属性会被React自行处理对应到底层的事件或者属性
 *    --jsx最终会被babel转换为React.createElement
 *      1.同时如果是标签元素，则会将对应的标签属性全部传递给React.createElement,然后React内部会自行处理
 *      2.如果是组件元素,他的这些组件属性会被作为参数传递给对应的组件函数
 * 
 * useCallback:缓存引用
 */
export default function Counter(props) {
  const [count,setCount] = useState(props.defaultValue||0)
  //undefined、null、false不会在页面渲染任何东西

  //只要你调用setCount对数据产生了变动,那么当前使用了该状态的react组件就会重新渲染

  const increase = useCallback(()=>{
    setCount(prev=>prev+1)
  },[])

  const decrease = useMemo(()=>()=>{
    setCount(prev=>prev-1)
  },[])

  //不给依赖项的后果,使用得是首次渲染时刻的时间切片
  const getCountValue = useCallback(()=>{
    //每一次count的重新渲染,都会导致getCountValue重新刷新
    console.log("最新的count值",count)
  },[count])

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
      <button onClick={getCountValue}>get count value</button>
      <span>{props.defaultValue}</span>
    </div>
  )
}
