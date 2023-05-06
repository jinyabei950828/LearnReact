import React from 'react'

export default function ReportButton() {
  const handleClick = ()=>{
    console.log("hello world")
  }
  return (
    <button onClick={handleClick}>
      click me
    </button>
  )
}

