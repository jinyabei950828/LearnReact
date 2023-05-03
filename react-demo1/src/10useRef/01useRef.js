import React, { createRef, useRef,useEffect } from 'react'

export default function App() {
  const inputRef =createRef()
  console.log(inputRef)//{current: null}

  const useinputRef =useRef()
  console.log(useinputRef)//{current: undefined}

  useEffect(()=>{
    console.log(inputRef)
  })


  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={()=>inputRef.current.focus()}>获取焦点</button>

      <input type='text' ref={useinputRef}/>
      <button onClick={()=>useinputRef.current.focus()}>获取焦点</button>
    </div>
  )
}
