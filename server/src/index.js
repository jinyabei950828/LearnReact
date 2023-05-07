//不能用es module
const koa = require("koa")

const koaApp = new koa()

koaApp.listen(8888,()=>{
  console.log('koa started at 8888')
})

koaApp.use((ctx)=>{
  console.log("ctx",ctx.path,ctx.url)
  const {path} = ctx
  if(path==='/student'){
    console.log("student matched")
    //返回数据
    const jsonData = require('./student.json');
    console.log('jsonData',jsonData)
    //返回给客户端
    ctx.response.body = jsonData
  }
})