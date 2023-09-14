import axios from 'axios'
import { Link } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import Loading from '../components/Loading'

const Home = () => {
  const products = useFetch('GET', 'http://localhost:3000/products')

  if (products && products.data) {
    const items = products.data
    return (
      <div className="container mx-auto my-4">
        
        <Link to="/products/add">
          <span className="px-2 py-1 bg-teal-500 my-2 block w-40 text-white rounded-md">Add New Item</span>
        </Link>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-center">Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-center">Price</th>
              <th className="text-left py-3 px-0.5 uppercase font-semibold text-sm text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            { items.map((item, i) => (
              <tr key={i} className="text-center">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.price}</td>
                <td className="py-3 px-4">
                  <Link to={`/products/detail/${item._id}`}>
                    <span className="px-2 py-1 bg-sky-500 text-white rounded-md">Detail</span>
                  </Link>
                </td>
              </tr>
            )) } 
          </tbody>
        </table>

      </div>
    )
  } else {
    return <Loading />
  }
  
}

export default Home