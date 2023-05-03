import React, { useEffect, useState } from 'react'

export default function App() {
  const [state,setState] = useState(0)

  const timer = useEffect(()=>{
    setInterval(()=>{
      setState((prev)=>prev+1)
    },1000)

    //清除定时器
    return ()=>clearInterval(timer)
  },[])

  return (
    <div>
      <h2>{state}</h2>
    </div>
  )
}
