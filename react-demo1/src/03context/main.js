import React, { Component } from 'react'
import Hello from './hello'
import MainContext from './context'

export class main extends Component {
  render() {
    //可以传普通属性、对象、数组
    const obj = {
      name:'casy',
      age:18
    }
    return (
      <div>
        <MainContext.Provider value={obj}>
          main组件是爷爷组件
          <Hello />
        </MainContext.Provider>
      </div>
    )
  }
}

export default main
