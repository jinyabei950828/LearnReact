import React ,{useCallback}from 'react'
import useState from '../../hooks/useState'

function TestUseState() {
  console.log("88组件重新渲染")
  const [count,setCount] = useState(0)
  const [words,setWords] = useState("hello world")

  const increase = useCallback(()=>{
    setCount(prev=>prev+1)
  },[])

  const decrease = useCallback(()=>{
    setCount(prev=>prev-1)
  },[])


  const changeWords = useCallback(()=>{
    setWords(Math.random())
  },[])

  return (
    <div>
      <span>count:{count}</span>
      <button onClick={increase}>add count</button>
      <button onClick={decrease}>del count</button>
      <span>words:{words}</span>
      <button onClick={changeWords}>changeWords</button>
    </div>
  )
}
export default TestUseState
