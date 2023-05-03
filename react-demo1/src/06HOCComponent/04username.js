import React, { Component } from 'react'

export default function PropUsername(WarpComponent){
  class NewComponent extends Component{
    state = {
      username:''
    } 
  
    componentDidMount(){
      const username ='admin'
      this.setState({username})
    }

    render(){
      return <WarpComponent username = {this.state.username}/>
    }
  }
  return NewComponent
}
