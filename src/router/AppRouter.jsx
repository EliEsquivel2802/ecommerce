import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import EditProduct from '../assets/pages/editProducts/EditProduct'
import Login from '../assets/pages/login/Login'
import Create from '../assets/pages/createProduct/Create'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/edit-product' element={<EditProduct />} />
            <Route path='/create-product' element={<Create />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter