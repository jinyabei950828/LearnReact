import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class son extends Component {
  constructor(props){
    super()
    this.state = {
      name:'前端新手',
      msg:'这是一个前端初级小菜鸟',
      parentMsg:props.msg
    }
  }

  handleChange = (e)=>{
    this.setState({parentMsg:e.target.value})
    //对从父组件传过来的值进行调用
    this.props.parentChange(e.target.value)
  }

  render() {
    const {name,msg,parentMsg} = this.state
    // 用别名从prop中取值
    const {name:pName,msg:pMsg} = this.props
    return (
      <div>
        <h1>son page</h1>
        <p>姓名:{name}</p>
        <p>介绍:{msg}</p>
        <p>资深前端介绍信息:{parentMsg}--{pName}--{pMsg}</p>
        <input type='text' defaultValue={parentMsg} onChange={this.handleChange}/>
      </div>
    )
  }
}

//使用props校验第二步
son.propTypes = {
  name:PropTypes.string,
  msg:PropTypes.string.isRequired
}

//如果需要执行默认值
son.defaultProps = {
  name:'casey',
  msg:'hello'
}

export default son
