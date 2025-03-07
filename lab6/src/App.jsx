
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';
import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { Footer } from '../../clase060325/src/pages/Footer';

function App() {

  return (
    <>
    
        
        <Layout/>
        <Routes>
          <Route path="Dashboard" element={ <Dashboard/> }></Route>
          <Route path="Home" element={ <Home/> }></Route>
          <Route path="Login" element={ <Login />}></Route>
          <Route path="Perfil" element={ <Perfil/> }></Route>
          <Route path="*" element={ <Login/> }></Route>
        
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App;