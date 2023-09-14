import express from 'express'
import mongoose from 'mongoose'
import itemsRoute from './routes/itemsRoute.js'
import cors from 'cors'

const app = express()
app.use(express.json())

const url = 'mongodb+srv://muhammadfirgan50:9khW8QlEHIOVMxKe@cobanodejs.iafzmsh.mongodb.net/?retryWrites=true&w=majority'
const port = 3000

app.get('/', (req, res) => {
  console.log(req)
  return res.status(234).send('ok')
})

app.use(cors())
app.use('/products', itemsRoute)

mongoose
  .connect(url)
  .then(() => {
    console.log('connected')
    app.listen(port, () => {
      console.log(`listening to : http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })