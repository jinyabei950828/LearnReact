import React, { useEffect, useState } from 'react'

export default function App() {
  const  [state,setState] = useState(0)

  useEffect(()=>{
    document.title =`你点击了${state}次`
  })

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>点击</button>
    </div>
  )
}
