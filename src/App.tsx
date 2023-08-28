import EditProfileForm from './components/EditProfileForm';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Meniu from './components/Meniu';
import NavBar from './components/NavBar';
import RegisterForm from './components/RegisterForm';
import ShoppingCart from './components/ShoppingCart';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserType from './types/auth'
import { useState } from 'react'

  


function App() {
 

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginForm /> } />
        <Route path='/register' element={<RegisterForm /> } />
        <Route path='/' element={<Home /> } />
        <Route path='/EditProfile'element={<EditProfileForm /> } />
        <Route path='/ShoppingCart'element={<ShoppingCart /> } />
        <Route path='/Meniu'element={<Meniu /> } />

      </Routes>
      
    </div>
  )
}

export default App
