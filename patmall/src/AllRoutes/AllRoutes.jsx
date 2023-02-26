import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home'
import Jeweller from '../Pages/Jeweller'
import Furniture from '../ProductPage/Furniture'
import Ornament from '../ProductPage/Ornament'
import UserPage from '../SignIn/UserPage'
import Login from '../SignIn/Login'
import Signup from '../SignIn/Signup'
import SingleProductJeweller from '../SingleProductPage/SingleProductJeweller'
import Adress from '../Pages/Adress.jsx'
import SingleProductFurniture from '../SingleProductPage/SingleProductFurniture'
import Contact from '../Pages/Contact';
import Payment from '../Pages/Payment';
import Admin from '../ProductPage/Admin'
import AdminLogin from '../SignIn/AdminLogin'
const AllRoutes = () => {
  return (
    <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/ornament' element={<Ornament/>}></Route>
   <Route path='/furniture' element={<Furniture/>}></Route>
   <Route path='/furniture/:id' element={
    <SingleProductFurniture/>
    
  
    }></Route>
<Route path='/contact' element={<Contact/>}></Route>
   <Route path='/login' element={<Login/>}> </Route>
   <Route  path='/user' element={<UserPage/>}></Route>
   <Route path='/signup' element={<Signup/>}> </Route>
   <Route path='/adress' element={<Adress/>}></Route>
   <Route path='/payment' element={<Payment/>}></Route>
   <Route path='/admin' element={<Admin/>}></Route>
   <Route path='/adminlogin' element={<AdminLogin/>}></Route>

   <Route path='/ornament/:id' element={
    <SingleProductJeweller/>
    
    

  
   }></Route>
       </Routes>
  )
}

export default AllRoutes