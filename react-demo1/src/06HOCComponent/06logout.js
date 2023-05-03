import React, { Component } from 'react'
import PropUsername from './04username'

export class Logout extends Component {
  render() {
    return (
      <div>
        <h1>logout</h1>
        <p>{this.props.username}登出了</p>
      </div>
    )
  }
}

export default PropUsername(Logout)