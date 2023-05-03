import React, { Component } from 'react'
import Parent from './parent'

export class index extends Component {
  state = {
    list:[
      {id:1,value:'red'},
      {id:2,value:'blue'},
      {id:3,value:'green'}
    ],
    color:'red'
  }

  handleSelect = (e)=>{
    this.setState({color:e.target.value})
  }

  render() {
    const {list,color} = this.state
    return (
      <div>
        爷爷
        <select value={color} onChange={this.handleSelect}>
          {
            list.map(item=>{
              return(
                <option key={item.id}>{item.value}</option>
              )
            })
          }
        </select>
        {
          list.map(item=>{
            return(
              <Parent key={item.id} value={item.value} color={color}/>
            )
          })
        }
      </div>
    )
  }
}

export default index
