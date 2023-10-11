const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.sendFile("/home/sys2023/Documents/WhatsApp_SaaS/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})