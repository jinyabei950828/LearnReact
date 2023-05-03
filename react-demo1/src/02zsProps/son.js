import React, { Component } from 'react'

export class son extends Component {
  render() {
    return <button style={{'color':this.props.color}}>{this.props.value}</button>
  }
}

export default son
