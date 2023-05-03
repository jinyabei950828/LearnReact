import React, { useReducer } from 'react'

export default function App() {
  const [state,dispatch] = useReducer((state,action)=>{
    if(action==='add'){
      return state+1
    }else if(action==='prep'){
      return state-1
    }
    return state
  },0)

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=>dispatch('add')}>加1</button>
      <button onClick={()=>dispatch('prep')}>减1</button>
    </div>
  )
}
