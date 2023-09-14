import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (method, url, body = {}) => {
  const [ result, setResult ] = useState(null)
  
  const fetchingData = async () => {
    try {
      const response = await axios.request({
        method: method,
        url: url,
        data: body
      })
      setResult(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchingData()
  }, [])
  
  return result
}

export default useFetch