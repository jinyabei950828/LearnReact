import React, { Component } from 'react'

class People extends Component{
  render(){
    return (
      <div>
        <h1>我是people组件</h1>
        <p>我的名字是:{this.props.name},我的年龄是:{this.props.age}</p>
        <p>我的爱好是:{this.props.hobby}</p>
      </div>
    ) 
  }
}

class Boy extends Component{
  render(){
    return (
      <div>
        <h1>我是Boy组件</h1>
        <p>我的名字是:{this.props.name},我的年龄是:{this.props.age}</p>
        <p>我的爱好是:{this.props.hobby}</p>
      </div>
    ) 
  }
}

const PropsComponent = (Component)=>{
  const newComponent = (props)=>{
    return <Component {...props} hobby="吃饭睡觉打豆豆"/>
  }
  return newComponent
}

const PropsPeople = PropsComponent(People)
const PropsBoy = PropsComponent(Boy)

export class AddProps extends Component {
  render() {
    return (
      <div>
        {/* <People name='张三' age='16' hobby="吃饭睡觉打豆豆"/>
        <Boy name='李四' age='15' hobby="吃饭睡觉打豆豆"/> */}
        <PropsPeople name='小红' age='12'/>
        <PropsBoy name='小明' age='13'/>
      </div>
    )
  }
}

export default AddProps
