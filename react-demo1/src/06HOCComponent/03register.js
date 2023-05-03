import React, { Component } from 'react'

export class Register extends Component {
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
        <h1>Register</h1>
        <p>{this.state.username}注册了</p>
      </div>
    )
  }
}

export default Register