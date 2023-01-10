const express = require('express')
const connectDatabase = require('./db')
const cors = require('cors')

const port = 5000
const app = express()
connectDatabase()
app.use(express.json())
app.use(cors())

app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log('server started successfully')
})