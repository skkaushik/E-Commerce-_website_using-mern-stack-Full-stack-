
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from "./pages/About"
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPasswrd from './pages/auth/ForgotPasswrd';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
   <>
  
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/dashboard' element={<PrivateRoute/>}>
    <Route path='user' element={<Dashboard/>}/>
    </Route>

    <Route path='/dashboard' element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashboard/>}/>

    </Route>
   
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot-password' element={<ForgotPasswrd/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='/*' element={<Pagenotfound/>}/>


  </Routes>

   
    
   </>
  );
}

export default App;
