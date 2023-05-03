import React, { useState } from 'react'

//函数式组件添加状态
export default function APP() {
  const arr = useState(0)
  const state = arr[0] //当前值
  const setState = arr[1] //修改函数
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>setState(state+1)}>点击</button>
    </div>
  )
}
