import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export const Layout = () => {
  return <div  style = {{position: "fixed", top:0,left:0,width:"100%"}}>
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div style={{  alignItems: "center" ,width:"25%"}}>
        <NavLink to="/Home">Inicio</NavLink>
        <Outlet/>
      </div>
      <div style={{  alignItems: "center",width:"25%"}}>
      <NavLink to="/Login">Login</NavLink>
      <Outlet/>
      </div>
      <div style={{  alignItems: "center",width:"25%"}}>
      <NavLink to="/Perfil">RoadMap</NavLink>
     
      <Outlet/>
      </div>
      <div style={{  alignItems: "center",width:"25%"}}>
      <NavLink to="/Dashboard">Dashboard</NavLink>
      <Outlet/>
     
      </div>
      
        
        
      
  </nav>
    
    

  </div>;
}
