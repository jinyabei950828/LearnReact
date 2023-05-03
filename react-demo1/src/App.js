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
import UseEffectInterval from './09useEffect/05useEffect'
import UseRef from './10useRef/01useRef'
import UseReducer from './11useReducer/01useReducer'
import UseReducers from './11useReducer/02useReducer'

function App(){
  return(
    <div>
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
      <UseEffectInterval />
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
  