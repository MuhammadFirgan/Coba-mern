import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import Loading from '../components/Loading'
import useFetch from '../hook/useFetch'

const EditItem = () => {
  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState(0)
  const [ desc, setDesc ] = useState('')
  //const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const { id } = useParams()
  const navigate = useNavigate()

  const response = useFetch('GET', `http://localhost:3000/products/${id}`)
  
  useEffect(() => {
    if (response) {
      setName(response.name)
      setPrice(response.price)
      setDesc(response.desc)
    }
  }, [response])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updateItem = await axios.put(`http://localhost:3000/products/${id}`, { name, price, desc })
      enqueueSnackbar(updateItem.data.message, { variant: 'success' })
      navigate('/')
    } catch (e) {
      enqueueSnackbar(e, { variant: 'error' })
      console.log(e)
    }
  }
  return (
    <div className="container mx-2 my-5 md:mx-auto">
      <h1 className="text-sky-500 text-3xl my-2">Add New Item</h1>
    { response ? (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="mb-2">Name</label>
          <input id="name" placeholder="product's name.." className="px-4 py-2 max-w-sm rounded-md border-2 border-stone-500" required onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="mb-2">Price</label>
          <input type="number" id="name" placeholder="product's price.." className="px-4 py-2 w-40 rounded-md border-2 border-stone-500" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="name" className="mb-2">Description</label>
          <textarea type="number" id="name" placeholder="product's price.." className="px-4 py-2 h-72 max-w-sm rounded-md border-2 border-stone-500 md:max-w-md" onChange={(e) => setDesc(e.target.value)} value={desc} />
        </div>
        <button type="submit" className="px-4 py-2 bg-sky-500 rounded-md text-white w-40">Edit Item</button>
        <Link to="/">
          <span>Back to home</span>
        </Link>
      </form>
    ) : ( <Loading /> ) }
    </div>
  )
}

export default EditItem