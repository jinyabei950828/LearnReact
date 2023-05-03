import React,{useState}from 'react'

export default function App() {
  const [movies,setMovies] = useState([
    {id:1,name:'你好,李焕英',price:50},
    {id:2,name:'哆啦A梦',price:50},
    {id:3,name:'守岛人',price:50},
    {id:4,name:'1921',price:50},
    {id:5,name:'中国医生',price:50}
  ])

  function changePrice(index){
    const movieList = [...movies]
    movieList[index].price += 1
    setMovies(movieList)
  }

  return (
    <div>
      <ul>
        {
          movies.map((item,index)=>{
            return <li key={item.id}>
              <span>电影名:{item.name}</span>
              <span>电影票价:{item.price}</span>
              <button onClick={()=>changePrice(index)}>涨价了+1</button>
            </li>
          })
        }
      </ul>
    </div>
  )
}