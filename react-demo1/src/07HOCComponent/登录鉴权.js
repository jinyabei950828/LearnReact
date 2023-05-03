import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <h2>登录组件</h2>
      </div>
    )
  }
}

class Admin extends Component {
    render() {
      return (
        <div>
          <h2>管理员组件</h2>
        </div>
      )
    }
  }

function AuthComponent(Component){
  const NewComponent = (props)=>{
    const {isLogin} = props
    if(isLogin){
      return <Component {...props} />
    }else{
      return <Login />
    }
  }
  return NewComponent
}

const AuthAdmin = AuthComponent(Admin)


export class App extends Component {
  state = {
    isLogin:true
  }

  check = ()=>{
    this.setState({
      isLogin:!this.state.isLogin
    })
  }

  render() {
    return (
      <div>
        <AuthAdmin isLogin={this.state.isLogin}/>
        <button onClick={this.check}>
          {this.state.isLogin?'退出':'登录'}
        </button>
      </div>
    )
  }
}

export default App
