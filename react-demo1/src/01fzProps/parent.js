import React, { Component } from 'react'
import Son from './son'

export class parent extends Component {
  state = {
    name:'前端大佬',
    msg:'这是一个资深的前端大佬'
  }

  //如果想要子组件改父组件的值
  parentChange(data){
    this.setState({msg:data})
  }

  render() {
    const {name,msg} = this.state
    return (
      <div>
        <h1>parent page</h1>
        <p>姓名:{name}</p>
        <p>介绍:{msg}</p>
        <Son {...this.state} parentChange={this.parentChange.bind(this)}/>
      </div>
    )
  }
}

export default parent
