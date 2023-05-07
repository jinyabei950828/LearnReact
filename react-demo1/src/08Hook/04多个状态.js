import React,{useState}from 'react'

export default function App() {
  const [age,setAge] = useState(18)
  const [money,setMoney] = useState(1000)
  const [star,setStar] = useState(['刘亦菲','古力娜扎','迪丽热巴','杨幂'])
  const [obj,setObj] = useState({name:'张三',age:14})

  const updateObj = ()=>{
    setObj(prev=>{
      return{
        ...prev,
        name:'小白'
      }
    })
  }

  return (
    <div>
      <h1>李四同学{age}岁</h1>
      <p>他的存款:{money}</p>
      <ul>
        {
          star.map(item=>{
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <h2>{obj.name}今年{obj.age}岁</h2>
      <button onClick={()=>setStar([...star,'憨憨'])}>添加元素</button>
    </div>
  )
}
