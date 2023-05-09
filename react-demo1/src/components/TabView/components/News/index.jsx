import React, { useState } from 'react'
import NewItem from './NewsItem'

const arr = []
for(let i=0;i<500;i++){
  arr.push(i)
}

export default function News() {
  const [news,setNews]=useState(arr)

  return (
    <div>
      {news.map(newDescriptor=><NewItem newDescriptor={newDescriptor} />)}
    </div>
  )
}
