const express = require("express")
const dayjs = require('dayjs')
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World").status(200).end()
})

app.listen(8081, () => {
  console.log(8081, "nodejs started", dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss:Z'))
})
