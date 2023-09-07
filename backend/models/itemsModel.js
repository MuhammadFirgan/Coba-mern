import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
})

export const Item = mongoose.model('Item', itemSchema)

