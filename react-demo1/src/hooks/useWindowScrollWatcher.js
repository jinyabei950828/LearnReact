import { useEffect } from 'react'

export default function useWindowScrollWatcher(scrollCallback) {
  useEffect(()=>{
    document.addEventListener("scroll",()=>{
      scrollCallback()
    })
    return ()=>{
      document.removeEventListener(scrollCallback)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}
