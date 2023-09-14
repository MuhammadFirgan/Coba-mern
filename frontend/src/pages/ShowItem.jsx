import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import useFetch from '../hook/useFetch'
import Loading from '../components/Loading'


const ShowItem = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  
  const item = useFetch('GET', `http://localhost:3000/products/${id}`)
  
  const handleDelete = async () => {
    if (window.confirm('are you sure?')) {
      try {
        const response = await axios.delete(`http://localhost:3000/products/${id}`)
        enqueueSnackbar(response.data.message, { variant: 'success' })
        navigate('/')
      } catch (e) {
        console.log(e)
        enqueueSnackbar('Error to add new item', { variant: 'error' })
      }
    }
  }
 
  return (
    <div className="container m-3">
      {item ? (
        <div className="w-96 px-5 py-3 border-2">
          <h1>{item.name}</h1>
          <span>{item.price}</span>
          <p>{item.desc}</p>
          <div className="flex gap-3 mt-5">
            <Link to={`/products/edit/${item._id}`}>
              <span className="px-2 py-1 bg-yellow-500 text-white rounded-md">Edit</span>
            </Link>
            <Link to="/">
              <span className="px-2 py-1 bg-rose-500 text-white rounded-md" onClick={handleDelete}>Delete</span>
            </Link>
            <Link to="/">
              <span className="px-2 py-1 bg-green-500 text-white rounded-md">Back To Home</span>
            </Link>
          </div> 
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ShowItem