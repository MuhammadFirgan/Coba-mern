import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowItem from './pages/ShowItem'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/detail/:id" element={<ShowItem />} />
      <Route path="/products/add" element={<AddItem />} />
      <Route path="/products/edit/:id" element={<EditItem />} />
      
    </Routes>
  )
}

export default App