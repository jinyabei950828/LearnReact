import React, { Component } from 'react'

export class App extends Component {
  state = {
    count: 0 
  }

  componentDidMount(){
    document.title = `你点击了${this.state.count}次`
  }

  componentDidUpdate(){
    document.title = `你点击了${this.state.count}次`
  }

  render() {
    return (
      <div>
        <p>你点击了{this.state.count}次</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>点击</button>
      </div>
    )
  }
}

export default App
