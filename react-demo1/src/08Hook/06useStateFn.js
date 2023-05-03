import React, { useState } from 'react'

export default function App() {
  const [state,setState] = useState(()=>100)
  return (
    <div>
      <h1>{state}</h1>  
      <button onClick={()=>{
        setState((prev)=>prev+100)
      }}>+100</button> 
    </div>
  )
}
