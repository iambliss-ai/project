import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event => {
        event.preventDefault();
         //this stops the refresh
         auth.signInWithEmailAndPassword(email, password)
         .then((auth) => {
             //logged in, redirect to homepage..
        history.push('/');  
    
    })
      .catch(e => alert(e.message));
     };
    const register = event => {
        event.preventDefault(); //register login 
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and logged in .. redirect to homepage
            
        })
        .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
          <Link to="/">
                <img src="logo1.png" alt="" className="login__logo"/>
            </Link> 
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={Login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                       <p>
                        by signing in you agree to iMarket condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice. 
                      </p>
                      <button onClick={register} className="login__registerButton">Create your iMarket Account</button>
            </div> 
        </div>
    );
};

export default Login;
