import React, { Component } from 'react'

export class button extends Component {
  constructor(props){
    super(props)
    this.state = {liked:false}
    console.group('%c-1 初始化阶段','color:red',props,this.state)
  }

  handleClick=()=>{
    this.setState({liked:!this.state.liked})
  }

  UNSAFE_componentWillMount(){
    //这个生命周期dom未渲染，只会在组件加载前使用一次，在render之前调用
    //我们在这个方法里面适应setState改变状态,不会导致额外的调用一次render
    console.group('%c-2 组件加载前','color:green')
  }

  componentDidMount(){
    //只会在加载后调用一次,在render之后调用,从这个开始可以通过ReactDOM.findDOM
    console.group('%c-4 组件加载后','color:orange')
  }

  shouldComponentUpdate(){
    console.group('%c-5 数据是否需要更新','color:#00ae9d')
    return true
  }

  UNSAFE_componentWillUpdate(nextProps,nextState){
    console.group('%c-6 数据将要更新','color:#8552a1')
  }

  componentDidUpdate(nextProps,nextState){
    console.group('%c-7 数据已经更新','color:#7fb80e')
  }

  componentWillUnmount(){
    console.log('%c 8-组件销毁')
  }

  render() {
    console.group('%c-3 组件加载或者数据更新','color:blue')
    const text = this.state.liked?'喜欢':'不喜欢'
    return (
      <div>
        <p>你{text}学习react</p>
        <button onClick={this.handleClick}>修改</button>
        我是button组件
      </div>
    )
  }
}

export default button
