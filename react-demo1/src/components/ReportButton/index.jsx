import React from 'react'

/**
 * react 为了节约性能以及实现动态监听,react使用了动态委托的功能
 * 
 * react把事件绑定在了对应得root元素上，当某个真实的dom触发事件后,dom会随着事件冒泡一起冒到root元素上，root元素对应的事件处理函数
 * 又可以通过event.target知道真正触发事件的元素是谁（jsx所转换的真实dom是不会绑定任何的真实事件,react会把jsx所书写的对应的和事件
 * 相关的标签属性收集起来,找个地方存起来,最终真实dom在页面生成,当我们点击真实的dom，事件会冒泡，事件冒泡是不需要绑定到真实dom,事件
 * 也会冒泡，最终会冒泡到root,然后root来进行事件的处理）
 * 
 * react的事件池机制【17以后没有】
 * 在react16.8以前的版本，react为了更好的性能会尝试重用事件
 * react会保存引用,只是修改对应的属性值
 * 【注意:
 *    如果react17以下，都要注意不要再异步环境下访问事件源对象的属性，
 *    如果想在16.8中去异步访问event,也有办法，react说你调用:e.persist(),会取消事件池的重用机制
 * 】
 * 
 */

export default function ReportButton() {
  const handleClick = ()=>{
    console.log("hello world")
  }
  return (
    <div onClick={(e)=>{//e不是原生的event,只是react元素的event
      console.log("div click")
      e.stopPropagation()//都不是原生的e.stopPropagation,只是属性名是一样的而已，所以你在这里stopPropagation是没法阻止react的div react元素上的事件的
    }}>
      <button onClick={handleClick}>
        click me
      </button>
    </div>
  )
}

