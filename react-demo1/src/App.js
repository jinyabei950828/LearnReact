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
    </div>
  )
}

export default App
  