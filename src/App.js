import './App.css';
import Home from './pages/Sidebar/Sidebar';
import UserList from './pages/userlist/Userlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Adduser from './pages/Adduser/Adduser';
import Error from './pages/Erroe/Error';
import Private from './Private';
import Edituser from './pages/Edituser/Edituser';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
 

export default function App() {
   const {user}=useSelector(state=>state.user)
  return (
    <Router>

       <Routes>
        <Route path='/' element={!user? <Login />:<Home/>}> </Route>
        <Route  element={<Private/>} >

        <Route path='/sidebar' element={<Home />}> </Route>
        <Route path='/userlist' element={<UserList />}></Route>
        <Route path='/adduser' element={<Adduser />}></Route>
        <Route path='/edit/:id' element={<Edituser />}></Route>
        </Route>
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

