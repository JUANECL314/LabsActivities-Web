import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export const Layout = () => {
  return <div>
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Home">Inicio</NavLink>
        <hr/>
        <Outlet/>
      </div>
      <div>
        <NavLink to="/Home">Inicio</NavLink>
        <hr/>
        <Outlet/>
      </div>
      <div>
        <NavLink to="/Perfil">RoadMap</NavLink>
        <hr/>
        <Outlet/>
      </div>
      <div>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <hr/>
        <Outlet/>
      </div>
      
        
        
      
  </nav>
    <hr/>
    <Outlet/>

  </div>;
}
