import React, { useReducer } from 'react'

const initState = {count:0}

function addSub(state,action){
  switch(action.type){
    case 'add':
      return {count:state.count+1}
    case 'prep':
        return {count:state.count-1}
    default:
      throw Error()
  }
}

export default function App() {

  const [state,dispatch] = useReducer(addSub,initState)

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type:'add'})}>加1</button>
      <button onClick={()=>dispatch({type:'prep'})}>减1</button>
    </div>
  )
}