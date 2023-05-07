import React, { useEffect, useState } from 'react'
import {getStudentList} from './request'
/**
* useEffect：处理副作用
* 副作用:完全不依赖React功能的外部操作【这些外部操作不经过react的手，但是却对react产生了一些影响】
* 1.http请求
* 2.dom操作
* 3.异步请求多数都是会产生副作用的
* 虽然我们不是所有的副作用操作都是在useEffect里进行,但是官方建议我们尽可以将副作用放在useEffect中运行
* 因为副作用操作是会产生意外之外的结果，如果我们想要更好的追踪副作用的执行时机，就可以将副作用都归纳进
* useEffect里方便追踪
* 
* --setup：初始化的意思,是一个函数.
* --dependencies:依赖,是一个数组。
* useEffect的执行时机:
* 1.当我们使用useEffect去注册setup以后,React会在该组件每次挂载完毕（渲染完毕）到页面时都会执行对应的setup函数，但是是异步执行的setup
* 2.当依赖项发生变更时,useEffect会重新执行对应的setup
*
*
* setup函数会有一个返回值,这个返回值称为清理函数,清理函数会在组件卸载的时候执行 beforeDestory
* 
* ##实际场景
* 1.http请求
* 2.访问真实dom
*
* ##副作用的清除
* 1.dom事件的绑定清除
* 2.计时器绑定清除
* 
*
**/

export default function StudentList() {
  const [studentList,setStudentList] = useState([])

  //获取异步接口
  const fetchStudentFormServer = async()=>{
    const studentData = await getStudentList()
    console.log("studentData",studentData)
  }


  const getStudentListFormServer = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        setStudentList([{name:'王晓华'},{name:'黎明'}])
        resolve(true)
      },1000)
    })
  }

  useEffect(()=>{
    // getStudentListFormServer()
    fetchStudentFormServer()
    const studentListWrapper = document.getElementsByClassName("student-list-wrapper")[0]
    console.log("studstudentListWrapper",studentListWrapper)

    const eventHandler = (e)=>{
      console.log("hello key down")
    }

    document.addEventListener("keydown",eventHandler)

    return ()=>{
      document.removeEventListener("keydown",eventHandler)
    }
  },[])//依赖必须时react构造出来的数据(useState)

  return (
    <div className='student-list-wrapper'>
      {
        studentList.map(student=>{
          return (
            <div key={student.name}>{student.name}</div>
          )
        })
      }
    </div>
  )
}
