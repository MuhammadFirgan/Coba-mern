import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import axios from 'axios'

const AddItem = () => {
  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState(0)
  const [ desc, setDesc ] = useState('')
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  //const history = useHistory()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/products', { name, price, desc })
      //console.log(response.data.message)
      enqueueSnackbar(response.data.message, { variant: 'success' })
      navigate('/')
    } catch (e) {
      console.log(e)
      enqueueSnackbar('Delete error', { variant: 'error' })
    }
  
  }
  
  
  return (
    <div className="container mx-2 my-5 md:mx-auto">
      <h1 className="text-sky-500 text-3xl my-2">Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="mb-2">Name</label>
          <input id="name" placeholder="product's name.." className="px-4 py-2 max-w-sm rounded-md border-2 border-stone-500" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="mb-2">Price</label>
          <input type="number" id="name" placeholder="product's price.." className="px-4 py-2 w-40 rounded-md border-2 border-stone-500" onChange={(e) => setPrice(e.target.value)}  />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="mb-2">Description</label>
          <textarea type="number" id="name" placeholder="product's price.." className="px-4 py-2 h-72 max-w-sm rounded-md border-2 border-stone-500 md:max-w-md" onChange={(e) => setDesc(e.target.value)} ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-sky-500 rounded-md text-white w-40">Add Item</button>
      </form>
    </div>
  )
}

export default AddItem