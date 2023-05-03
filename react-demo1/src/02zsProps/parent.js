import React, { Component } from 'react'
import Son from './son'

export class parent extends Component {
  state = {
    name:''
  }

  handleChange = (e)=>{
    this.setState({name:e.target.value})
  }

  render() {
    return (
      <div>
        父亲
        <input type='text' value={this.props.value} onChange={this.handleChange}/>
        <Son {...this.props}/>
      </div>
    )
  }
}

export default parent
