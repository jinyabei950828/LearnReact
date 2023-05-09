import React,{useState,useEffect, Fragment, useCallback,useRef} from 'react'
/**
 * <></>->是一个语法糖,React.Fragment
 * 
 */

let timerId = null

export default function Tick() {
  const [tickTime,setTickTime] = useState(1000)
  // const [timerId,setTimerId] = useState(null)

  //useRef会返回一个对象，对象里面有一个current属性，ref是可读可写的
  const timerIdRef = useRef(null)

  // let timer = useEffect(()=>{
  //   setInterval(()=>{
  //     setTickTime((prev)=>prev-1)
  //     console.log("Tick useEffect  定时器在工作")
  //   },1000)

  //   //清除定时器(todo:好像清除定时器没生效)
  //   return ()=>{
  //     clearInterval(timer)
  //     timer= null
  //   }

  // },[])

  const startTick = useCallback(()=>{
    timerIdRef.current = setInterval(() => {
      setTickTime(prev=>prev-1)
    }, 1000);
    // setTimerId(_timerId)
  },[])

  const stopTick = useCallback(()=>{
    if(timerIdRef.current)clearInterval(timerIdRef.current)
  },[])

  return (
    // <Fragment>
    //   抢购剩余时间:{tickTime}
    // </Fragment>
    <>
     <button onClick={startTick}>start</button>
      抢购剩余时间:{tickTime}
      <button onClick={stopTick}>stop</button>
    </>
  )
}
