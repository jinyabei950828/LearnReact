import React, { useCallback, useEffect, useState,useMemo } from 'react'
import {getStudentList} from './request'
import StudentItem from './componets/StudentItem'
import useReauestLoadingDispatcher from '../../hooks/useReauestLoadingDispatcher'
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
* useCallback:长期稳定的维护某一个函数的引用,他会将函数创建后的引用保存，
*             当函数组件下一次渲染时，他会直接返回之前保存的引用,而不是重新创建引用
* useCallback只在创建函数引用的时候使用
* 1.第一个参数--你要对应赋值给变量的函数体【函数声明】（不会被react执行，而是直接进入缓存）
* 2.第二个参数--依赖项,当依赖项发生变化以后,对应的函数引用会被重新生成
*
* 每次函数组件重新渲染都是函数的重新执行,那么重新执行的话,内部函数的上下文会整体变化
*
*
* useMemo(useCallback就是useMemo实现的)
* Vue->计算属性 useMemo类似于这个Vue的计算属性
* 用来做缓存的，出了
* 1.第一个参数:函数,直接被React执行，然后将其返回值进行缓存
* 2.第二个参数：依赖项:当依赖项变化,会重新执行第一个参数，然后拿到最新的返回值,进行缓存
*
*默认用useCallback缓存函数
*
*
* useRef:构建一个状态出来,但是这个状态是脱离react控制的，他的变化不会造成重新渲染，同时状态还不会因为组件的重新渲染而被初始化
* 处理真实的dom:
*
* forwardRef:高阶组件
* 高阶组件:接受一个组件做为参数，返回一个新的组件，forwardRef给函数组件扩展了一个属性,叫做Ref属性
* 给函数组件挂ref,是要求子组件去追加forwardRef的,同时forwardRef会将得到的这个ref属性通过第二个参数传递给真实的函数组件
* forwardRef 将允许你给函数组件挂ref,同时给函数组件扩展一个属性,叫做ref属性作为函数组件的第二个参数存在，你可以传递任何你想传递的参数
* forwardRef一般和ref连用
*
* 子组件拿父组件的东西->props
* 父组件拿到子组件的值->useImperativeHandle(ref,()=>{},[])
*
* useImperativeHandle
* 第一个参数是ref:他会在底层修改这个ref的current属性
* 第二个参数是函数:这个函数的返回值最终会被丢到这个ref.current属性上去
* 第三个参数是依赖项:依赖项不变,ref的current不会重新被赋值
*
*
* 上下文:
* 定义:允许组件之间通过除了props以外的情况去共享数据（通过props一层一层的传下去，是不是让子组件共享父组件的数据）
* 1.创建上下文: createContext()
*
* 
* useLayoutEffect
* useEffect和useEffect的功能几乎完全一致,只有一个细小的区别【运行规则】
* useEffect:组件首次渲染工作工作完成并将真实dom生成到页面以后,将对应的回调函数推入到异步队列中等待执行
* useLayoutEffect:组件首次渲染工作工作完成并将真实dom生成到页面以后,将对应的回调函数推入到同步队列中等待执行【useLayoutEffect会完全阻塞后续的更新工作】
*
* 
* diff算法
*
**/

export default function StudentList() {
  const [studentList,setStudentList] = useState([])
  const {loading,executeRequest} = useReauestLoadingDispatcher();
  const [studentNameListState,setStudentNameList]= useState([])

  //获取异步接口
  const fetchStudentFormServer = useCallback(async()=>{
    //否则你拿的还是上一次事件切片的函数
    executeRequest(async()=>{
      console.log("===studentResponse")
      const studentResponse = await getStudentList()
      console.log("===studentResponse",studentResponse)
      setStudentList(studentResponse.data)
    })
  },[executeRequest]);

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

  // useEffect(()=>{
  //   console.log("_studentNameList",studentList)
  //   const _studentNameList = studentList.map(stu=>stu.name)
  //   setStudentNameList(_studentNameList)
  // },[studentList])

  const studentNameList = useMemo(()=>studentList.map(stu=>stu.name),[studentList])

  return (
    <div className='student-list-wrapper'>
      {!loading&&studentList.length===0&&<div>暂无学生数据</div>}
      {
        loading?<div>正在加载中...</div>:(
          studentList.map(student=>{
            return (
              <StudentItem key={student.name} {...student} />
            )
          })
        )
      }
      {studentNameList}
    </div>
  )
}
