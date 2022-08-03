import './App.css';
import React, { useEffect } from 'react';
import Header from './Header.js';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from './Checkout.js'
import Login from './Login.js'
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch]= useStateValue();

  useEffect(() =>{
      auth.onAuthStateChanged(authUser =>{
        console.log(authUser);

        if(authUser){
          //user is/was loggedIn
          dispatch({
            type:'SET_USER',
            user:authUser
          })
        } else {
          //user is logged out
            dispatch({
              type:'SET_USER',
              user:null
            })
        }

        

      } )
  }, [] )


  return (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
