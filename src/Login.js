import './App.css';
import { useState } from "react";
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css'
import { FaClock } from 'react-icons/fa';
import { setDate } from 'rsuite/esm/internals/utils/date';
import axios from 'axios'; 
import { useCookies } from 'react-cookie'
import { redirect } from "react-router-dom";
const users = require('./users.json');
function Login() {

    const [cookies, setCookie] = useCookies(['user'])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleAfterLogin(user) {
        if (user) {
            setCookie('user', user, { path: '/' })
            return redirect("/"); 
        }
    }

    const handleLogin = (event) => {
       event.preventDefault(); 
       if (email === "" || password === ""){
        return alert('Ingresa todos los campos.')
       }
       let emailFound = users.find(el => el.email === email);
       if (emailFound !== undefined){
        if(password === emailFound['password']){
          return handleAfterLogin({name: emailFound.name, email: emailFound.email});
        }
        else{
          return alert('incorrect password for that user.')
         }
       }else{
        return alert('user not found with that credentials.')
       }

     };

    return (
        <div className="App login">
          <img src={require('./static/logo.png')} className='logo-round'/>
          <form onSubmit={handleLogin} className='login-form'>
            <div className='contentBox'>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}   

                />
            </div>
            <div className='contentBox'>
                <label htmlFor="password">Contraseña:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}   

                />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
    );
}

export default Login;
