import axios from 'axios'

// const axiosInstance = axios.create({
//   baseURL:'http://localhost:8888',
//   proxy:{

//   }
// })


export const getStudentList = ()=>{
  return axios.get("/api/student")
}