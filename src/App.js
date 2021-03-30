import React, {useEffect,forwardRef} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
import Payment from './Payment'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"



const promise = loadStripe('pk_test_51Hmh4yART9HVADBylhWmZHEBBk7Qs9RrpefpIOQjcIIskC4w7zEvYWM9QIompXVqVtRdvFiqMkZMR9ppGsAHRpsv00jQhuyuXf');
function App() {

  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    };
  }, []);

     console.log("USER IS >>>", user);

  return (
   
    <Router>
    <div className="app">
     <Switch>
       <Route path = "/checkout">
       <Header/>
       <Checkout/>
       </Route>
       <Route path = "/payment">
       <Header/>
       <Elements stripe={promise}>
        <Payment/>
       </Elements>
      
       </Route>
       <Route path="/login">
       <Login/>
       </Route>
       {/*This is the default route*/}
       <Route path="/">
        <Header/>
         <Home/>
   
       </Route>
     </Switch>
    </div>
    </Router>
   
   
  );
}



export default App;
