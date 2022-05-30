import Header from './components/header.component';
import HomePage from './pages/home.page';
import ReactSimpleCarousel from "react-spring-carousel";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useEffect } from 'react';
import {auth } from './resources/firebase'
import {Routes, Route , BrowserRouter as Router} from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'

import Notification from './components/notification';
import store from './resources/store';
import Cart from './pages/cart.page';
import { login } from './resources/actions/constants/actions';
import Product from './pages/product.page';
function App() {

  const {user} = useSelector((state=>state))
  useEffect(()=>{
    
    const removeOnAuthStateChange = onAuthStateChanged(auth,(result)=>{
      // request from backend with the token
      console.log(result)
      if(!user && result)
        login()
      // authenticate with backend and send the accessToken to check if user is present with this token id
    })
    return ()=>{
      removeOnAuthStateChange();
    }
  },[])
  
  return (
     <Router>
      <div className=''>
      <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route  path="/cart" element={<Cart/>}/>
          <Route path="/product/:bookId" element={<Product/>}/>
        </Routes>
        <Notification/>
      </div>
    </Router>
  );
}

export default App;
