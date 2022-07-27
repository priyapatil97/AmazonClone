import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbar/Newnav';
import { Routes, Route } from "react-router-dom";
import Signin from './components/signup_sign/Signin';
import Signup from './components/signup_sign/Signup';
import Cart from './components/cart/Cart';
import BuyNow from "./components/buynow/BuyNow";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {

  const  [data, setData] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setData(true)
    },2000)
  },[])

  return (
    <>
    {
      data ? (
        <>
         <Navbar />
    <Newnav />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/getproductsone/:id" element={<Cart />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/buynow" element={<BuyNow/>} />


    </Routes>
    
    <Footer />

        </>
      ):(
        <div className='circle'>
            <CircularProgress />
            <h2>Loading</h2>
        </div>
      )
    }
    
    </>
    );
}

export default App;
