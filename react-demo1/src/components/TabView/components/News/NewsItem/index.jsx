import React from 'react'

export default function NewItem({newDescriptor}) {
  //卡帧
  for(let i=0;i<80;i++){
    console.log("i",i)
  }
  return (
    <div>
      newItem:{newDescriptor}
    </div>
  )
}
