import React, { useState } from 'react'

export default function APP() {
  const [state,setState] =useState(0)
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>setState(state+1)}>加1</button>
      <button onClick={()=>setState(state-1)}>减1</button>
    </div>
  )
}