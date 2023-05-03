import React, { Component } from 'react'

export class Add extends Component {
  state = {
    count:1
  }

  add = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>点击</button>
      </div>
    )
  }
}

export default Add
