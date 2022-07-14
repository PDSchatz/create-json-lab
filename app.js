const Express = require('express')
const app = Express()
const answers = require('./answers.json')
require('dotenv').config()

app.get('/', (_, res) => {
  res.status(200).json(answers)
})

app.listen(process.env.PORT, () => {
  console.log(`now listening on ${process.env.PORT}`)
})

