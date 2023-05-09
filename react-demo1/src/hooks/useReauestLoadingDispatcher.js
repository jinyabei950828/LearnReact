import { useState } from 'react'

/**
 * 自定义hook(一定要以use开头)
 * 有点:消除冗余代码、提高代码的可维性,同时将复杂的代码逻辑进行内聚,减少出错的可能性
 * 
 *  vue $forceupdate:强制刷新组件
 *  强制刷新组件:这种一般是逼不得已才使用,如果你需要用到强制刷新组件,代表你操作真实dom的情况比较多
 *  如果你想让一个组件渲染,无非是状态或者属性发生了变化
 * 
 */
export default function useReauestLoadingDispatcher() {
  const [loading,setLoaing] = useState(false)

  const executeRequest = async(promiseFn)=>{
    setLoaing(true)
    promiseFn();
    setLoaing(false)
  }
  return {
    loading,
    executeRequest
  }
}
