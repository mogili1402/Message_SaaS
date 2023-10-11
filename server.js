const express = require('express')
const dir=__dirname
console.log(dir)
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.sendFile(dir+"/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})