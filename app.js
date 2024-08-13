const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (request, response) => {
  response.send('Hello MR.Jayanth')
})

app.listen(3000, () => {
  console.log('This is runnig...')
})
