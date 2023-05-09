import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

/**
 * 在react中，一个组件大多数情况下是为函数【react还有类组件，但是现在已经是react18了，react hooks不是很流行的时候用的东西,
 * 类组件退出舞台的原因，是因为react拥抱的是函数式编程】
 * 
 * React的要求:
 * 1.组件名大写
 * 2.React组件必须返回可以被渲染的React Element
 *  --null
 *  --React元素
 *  --组件
 *  --可以被迭代的对象【包括数组、set、map...】,只要一个对象具备迭代接口（自身或者原型上有[Symbol.itrator]）,那么他就是可以被渲染的
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //不是真正的dom元素，而是react元素
  //如果是大写开头的，react就默认为组件，小写就默认为react元素
  <div className='app'>
    <App />
  </div>
);

console.log("app dom",document.getElementsByClassName("app")[0])
requestIdleCallback(()=>{
  console.log("app dom1",document.getElementsByClassName("app")[0])

  const app = document.getElementsByClassName("app")[0]
  app.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('app click')
  })
})

//jsx->真实dom （编译转换）-> render是异步的

//23-32
console.log(`还要学${32-23}集`)
