import React, { Component } from 'react'

export class App extends Component {
  state = {
    count:0
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({count:this.state.count+1})
    },500)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default App
