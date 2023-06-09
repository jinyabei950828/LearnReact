import Fzindex from './01fzProps/index'
import Zsindex from './02zsProps/index'
import Context from './03context/main'
import Button from './04lifeCycle/button'
import Login from './06HOCComponent/01login'
import Logout from './06HOCComponent/02logout'
import Register from './06HOCComponent/03register'
import Logins from './06HOCComponent/05login'
import Logouts from './06HOCComponent/06logout'
import Registers from './06HOCComponent/07register'
import AddProps from './06HOCComponent/08增加props'
import LoginAuth from './07HOCComponent/登录鉴权'
import AddClass from './08Hook/01Class累加器'
import AddHook from './08Hook/02Hook累加器'
import AddUseState from './08Hook/03useState'
import UseStates from './08Hook/04多个状态'
import UseCompactStates from './08Hook/05复杂状态'
import UseStateFn from './08Hook/06useStateFn'
import UseEffectClass from './09useEffect/01Class组件的生命周期方法'
import UseEffect from './09useEffect/02useEffect'
import UseEffects from './09useEffect/03useEffect'
import UseClassInterval from './09useEffect/04Class组件清除定时器'
import UseRef from './10useRef/01useRef'
import UseReducer from './11useReducer/01useReducer'
import UseReducers from './11useReducer/02useReducer'
// -------------------------------------------------
import ReportButton from './components/ReportButton'
import Counter from './components/Counter'
import StudentList from './components/StudentList'
import Tick from './components/Tick'
import ForceUpdateTest from './components/ForceUpdateTest'//自定义强制刷新组件
import TestInput from './components/TestInput'
import TabView from './components/TabView'
import TranasitionCase from './components/TransitionCase'
import TestUseState from './components/TestUseState'
import Buttons from './components/Button/index'

import { useRef, useState,useCallback } from 'react'
import ThemeContext from './context/themeContext'

function App(){
  const obj = {
    a : 1
  }
  
  obj[Symbol.iterator] = function* (){
    for(let prop in obj){
      yield [prop,obj[prop]]
    }
  }

  const [countValue,setCountValue] = useState(10)
  const handleClick = ()=>{
    setCountValue(prev=>prev+1)
  }

  //显示学生列表
  const [showStudentList,setShowStudentList] = useState(false)
  //显示倒计时
  const [showTick,setShowTick] = useState(true)

  const testInputRef = useRef(null)

  const handleClickForward = useCallback(()=>{
    console.log("testInputRef===",testInputRef.current.focus())
  },[])

  const [theme,setTheme] = useState("light")
  const changeTheme = ()=>{
    setTheme(prev=>{
      if(prev==='light')return "dark"
      return "light"
    })
  }

  return(
    <div>
      {obj}
      <ReportButton/>
      <hr/>
        <Buttons>
          登录
        </Buttons>
        <TestUseState />
        <TranasitionCase />
        <TabView />
      <hr/>
      <TestInput ref={testInputRef}/>
      <button onClick={handleClickForward}>click me1</button>
      <Counter defaultValue={countValue}/>
      <button onClick={handleClick}>点击我</button>
      <div
        style={{width:'100px',height:'200px',background:'red'}}
        onMouseEnter={(event)=>{console.log(event)}}
      >
        i am a div 
      </div>
      <p>下面是父子组件互相传值和props传值校验示例</p>
      <Fzindex />
      <hr />
      <p>下面是祖孙组件props层层传递示例</p>
      <Zsindex />
      <hr />
      <p>下面是跨组件通信用context</p>
      <Context />
      <hr />
      <p>生命周期组件示例</p>
      {true?<Button />:'haha'}
      <hr/>
      <h1>高阶函数HOC Component</h1>
      <Login />
      <Logout />
      <Register />
      <h1>下面是高阶组件方法实现的</h1>
      <Logins />
      <Logouts />
      <Registers />
      <hr />
      <h1>增强props</h1>
      <AddProps />
      <hr />
      <h1>高阶组件登录鉴权</h1>
      <LoginAuth />
      <hr />
      <h1>Class累加器</h1>
      <AddClass />
      <h1>Hook累加器</h1>
      <AddHook />
      <h1>useState常规用法</h1>
      <AddUseState />
      <h1>多个状态</h1>
      <UseStates />
      <h1>多个复杂状态</h1>
      <UseCompactStates />
      <UseStateFn />
      <hr/>
      <h1>生命周期</h1>
      <UseEffectClass /> 
      <UseEffect />
      <UseEffects />
      <UseClassInterval />
      <hr/>
      <ThemeContext.Provider value={theme}>
        <button onClick={()=>setShowStudentList((prev)=>!prev)}>{showStudentList?'卸载':'显示'}学生列表</button>
        {showStudentList?<StudentList />:null}
        <button onClick={changeTheme}>改变主题</button>
      </ThemeContext.Provider>
      <button onClick={()=>setShowTick((prev)=>!prev)}>{showTick?'卸载':'显示'}活动抢购</button>
      {showTick?<Tick />:null}
      <ForceUpdateTest />
      <hr/>
      <h1>useRef</h1>
      <UseRef />
      <hr/>
      <h1>useReducer</h1>
      <UseReducer/>
      <UseReducers />
    </div>
  )
}

export default App
  