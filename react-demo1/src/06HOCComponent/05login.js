import React, { Component } from 'react'
import PropUsername from './04username'

export class Login extends Component {
  render() {
    return (
      <div>
        <h1>login</h1>
        <p>{this.props.username}登录了</p>
      </div>
    )
  }
}

//在高级组件之前进行一次劫持
export default PropUsername(Login)
