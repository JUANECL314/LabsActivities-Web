import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const [ username, setUsername ] = useState('');
    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/Home');
    }
  return (
    <div style = {{position: "fixed", top:0,left:0,width:"100%"}}>
        <h2>Login</h2>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={onLogin}>Iniciar sesión</button>
    </div>
  )
}
