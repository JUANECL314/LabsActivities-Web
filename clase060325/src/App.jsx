
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Outlet, NavLink } from 'react-router-dom'
import { Perfil } from './pages/Perfil';
import { Layout } from './pages/Layout';
import { Login } from './pages/login';

function App() {

  return (
    <>
    
        
        <Layout/>
        <Routes>
          <Route path="Dashboard" element={ <Dashboard/> }></Route>
          <Route path="Home" element={ <Home/> }></Route>
          <Route path="Login" element={ <Login />}></Route>
          <Route path="Perfil" element={ <Perfil/> }></Route>
          <Route path="*" element={ <Home/> }></Route>
        </Routes>
      
    </>
  )
}

export default App;