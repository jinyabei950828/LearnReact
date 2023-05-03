import React, { Component } from 'react'

export class Logout extends Component {
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
        <h1>logout</h1>
        <p>{this.state.username}登出了</p>
      </div>
    )
  }
}

export default Logout