import React, { Component } from 'react'

export class Login extends Component {
  state = {
    username:''
  } 

  componentDidMount(){
    const username ='admin'
    this.setState({username})
  }

  render() {
    return (
      <div>
        <h1>login</h1>
        <p>{this.state.username}登录了</p>
      </div>
    )
  }
}

export default Login
