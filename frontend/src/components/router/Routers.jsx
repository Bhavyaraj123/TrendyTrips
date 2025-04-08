import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SearchRejult from '../pages/SearchRejult'
import Register from '../pages/register'
import TourDetails from '../pages/TourDetails'
import About from '../pages/About'
import TourPage from '../pages/TourPage'
import Booking from '../Booking/Booking'
const Routers = () => {
  return (
<>

<Routes>
    <Route path='/' element={<Navigate to={'/home'}/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/tours' element={<TourPage/>}/>
    <Route path='/tours/:id' element={<TourDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/tours/search' element={<SearchRejult/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/booking/:id' element={<Booking/>}/>
</Routes>
</>
  )
}

export default Routers;