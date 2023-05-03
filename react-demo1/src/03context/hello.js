import React, { Component } from 'react'
import World from './world'
import MainContext from './context'

export class hello extends Component {
  // static contextType = MainContext
  render() {
    console.log(this.context)
    return (
      <div>
        这是hello组件,是父亲组件-{this.context.name}
        <World />
      </div>
    )
  }
}

//比较推荐的写法
hello.contextType = MainContext

export default hello
