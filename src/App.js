import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Service';
import Products from './Pages/Product';
import Wishlist from './Pages/Wishlist';
import SignIn from './Pages/Auth/SignIn/index';
import SignUp from './Pages/Auth/SignUp';
import {str, loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Contact from './Pages/Contact';
import Shipping from './Components/Shipping';

function App() {

  const stripePromise = loadStripe("pk_test_51NHFtEH40MT5zcXS1tTYqchNYUrmmXT1norAcWfPMzrjU84hmtyi8c8InzjT84YdEJAN8rsLVa2iTnFoECASAZVL00NsSoTZjj");




  return (
    <>
      
   
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
