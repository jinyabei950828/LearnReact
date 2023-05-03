import React, { useEffect, useState } from 'react'

function Page(){
  const [age,setAge] = useState(18)
  const [money,setMoney] = useState(1000)

  useEffect(()=>{
    console.log('我被执行了')
  },[age,money])
  return (
    <div>
      <h2>page componet</h2>
      <p>{age}</p>
      <p>${money}</p>
      <button onClick={()=>setAge(age+1)}>长大</button>
      <button onClick={()=>setMoney(money+1000)}>变有钱</button>
    </div>  
  )
}

export default function App() {
  const  [state,setState] = useState(true)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState(!state)}>切换</button>
      {state&&<Page />}
    </div>
  )
}