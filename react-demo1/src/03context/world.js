import React, { Component } from 'react'
import MainContext from './context'

export class world extends Component {
  render() {
    return (
      <div>
        <MainContext.Consumer>
          {
            context=>{
              console.log(context)
              return (
                <div>这是world组件,是孙子组件-{context.name}</div> 
              )
            }
          }
        </MainContext.Consumer>
      </div>
    )
  }
}

export default world
