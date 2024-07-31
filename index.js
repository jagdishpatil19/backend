console.log("hello world");
const express = require('express')
const app = express()
const port = 4000
const gitHubData={
  "name":'jagdish',
  "mob":7448192722,
  age:23
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jd',(req,res)=>{
res.send('hiii jd welcome to my page')
})
app.get('/login',(req,res)=>{
    res.send('<h1>plese login </h1>')
})
app.get('/json',(req,res)=>{
  res.json(gitHubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})