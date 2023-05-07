import React,{useState,useEffect} from 'react'

export default function Tick() {
  const [tickTime,setTickTime] = useState(1000)

  let timer = useEffect(()=>{
    setInterval(()=>{
      setTickTime((prev)=>prev-1)
      console.log("Tick useEffect  定时器在工作")
    },1000)

    //清除定时器(todo:好像清除定时器没生效)
    return ()=>{
      clearInterval(timer)
      timer= null
    }

  },[])

  return (
    <div>
      抢购剩余时间:{tickTime}
    </div>
  )
}
