import { forwardRef, useCallback, useRef } from "react"

function TestInput(props,parentRef){
  const inputDomElement = useRef(null)

  const handleClick = useCallback(()=>{
    inputDomElement.current.focus()
  },[inputDomElement])

  return(
    <div>
      <input ref={inputDomElement} className="input-example" />
      <button onClick={handleClick}>click me</button>
      <input ref={parentRef} className="input-example1" />
    </div>
  )
}

export default forwardRef(TestInput)