import { useCallback, useMemo, useState, useTransition } from "react"
import Home from './components/Home/index'
import News from './components/News/index'
import About from "./components/About/index"

export default function TabView(){
  //home news about
  const [presentActiveTab,setPresentActiveTab] = useState("home")

  //pending->代表当前是否有请求在执行
  //startTransition->代表开启一个transition任务
  const [,startTransition ] = useTransition()
  
  const tabs = useMemo(()=>{
    return [
      {
        key:'home',
        label:'首页',
        component:<Home />
      },
      {
        key:'news',
        label:'新闻页',
        component:<News />
      },
      {
        key:'about',
        label:'关于我们',
        component:<About />
      }
    ]
  },[])

  const presentComponent = useMemo(()=>{
    return tabs.find(tab=>tab.key===presentActiveTab).component
  },[presentActiveTab])

  const changeTab = useCallback((tab)=>{
    //tansition 优先级
    startTransition(()=>setPresentActiveTab(tab))
  },[])
  return(
    <div>
      {
        tabs.map(tab=>{
          return(
            <button key={tab.key} onClick={()=>changeTab(tab.key)}>{tab.label}</button>
          )
        })
      }
      {
        presentComponent
      }
    </div>
  )
}