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
  const [user, setUser]=useState< UserType|null>(null)
 

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginForm setUser={setUser} /> } />
        <Route path='/register' element={<RegisterForm /> } />
        <Route path='/' element={<Home /> } />
        <Route path='/EditProfile'element={<EditProfileForm user={user}/> } />
        <Route path='/ShoppingCart'element={<ShoppingCart user={user}/> } />
        <Route path='/Meniu'element={<Meniu /> } />

      </Routes>
      
    </div>
  )
}

export default App
