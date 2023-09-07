import express from 'express'
import { Item } from '../models/itemsModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    /* code */
    const allItems = await Item.find({})
    return res.status(200).json({
      count: allItems.length,
      data: allItems
    })
  } catch (e) {
    console.log(e.message)
    return res.status(404).send({ message: e.message })
  }
})

router.post('/', async (req, res) => {
  try {
    
    if (!req.body.name || !req.body.price || !req.body.desc) {
      return res.status(404).send({
        message: 'Send all required fields'
      })
    }
    const newItem = {
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc
    }
    const item = await Item.create(newItem)
    return res.status(200).send({ message: 'New item successfully added' })
  } catch (e) {
    console.log(e.message)
    return res.status(404).send({ message: e.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const findItem = await Item.findById(id)
    return res.status(200).json(findItem)
  } catch (e) {
    console.log(e.message)
    return res.status(404).send({ message: e.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    if (!req.body.name || !req.body.price || !req.body.desc) {
      return res.status(404).send({
        message: 'Send all required fields'
      })
    }
    
    const { id } = req.params
    const updateItem = await Item.findByIdAndUpdate(id, req.body)
    if (!updateItem) {
      return res.status(404).send({ message: 'item not found' })
    }
    return res.status(200).send({ message: 'update success' })
  } catch (e) {
    console.log(e.message)
    return res.status(404).send({ message: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteItem = await Item.findByIdAndDelete(id)
    
    if (!deleteItem) {
      return res.status(404).send({ message: 'item not found' })
    }
    
    return res.status(200).send({ message: 'Delete Success' })
  } catch (e) {
    console.log(e.message)
    return res.status(404).send({ message: e.message })
  }
})

export default router 