import React from 'react'
import useReauestLoadingDispatcher from '../../hooks/useReauestLoadingDispatcher'

export default function Login() {
  const {loading,executeRequest} = useReauestLoadingDispatcher()

  const login = ()=>{
    executeRequest(async()=>{

    })
  }

  return (
    <div>
      <button onClick={login}>{loading?'正在登录':'登录'}</button>
    </div>
  )
}
