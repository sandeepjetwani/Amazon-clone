import './App.css';
import React, { useEffect } from 'react';
import Header from './Header.js';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from './Checkout.js'
import Login from './Login.js'
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import Payment from './Payment.js';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders.js'


const promise = loadStripe("pk_test_51LTiEoSBTWWZUCk5I5q9xhOHbUff2ciWI7a2k2V2xXUK4y3gRduU9QRgalSrOde4JVLo4787NaXWxSwrU3rSICaR00o4vo8YO5")


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
        <Route path="/payment" 
               element={
                <Elements stripe={promise} >
                  <Payment /> 
                </Elements>
                }
        />
        <Route path= "/orders" element={<Orders />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
