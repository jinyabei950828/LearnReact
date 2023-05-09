import { useState } from 'react'

export default function useForceUpdate() {
  console.log('组件进行了渲染')
  const [,setForceObj]=useState({})
  
  const forceUpdate = ()=>{
    setForceObj({})
  }
  return forceUpdate
}
