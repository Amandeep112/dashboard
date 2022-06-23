import React from 'react'
import classes from './navbar.module.css'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../Redux/action'


export default function Navbar() {
  const dispatch = useDispatch()

  // const navigate = useNavigate()
  const Logout = () => {
    if (window.confirm('Are you sure,want to LogOut')) {
      window.localStorage.removeItem('login')
     dispatch(logOut())
    //  navigate('/')
    }
    

  }
  return (
    <div className={classes.navbar}>
      <div className={classes.Logoutbtn}>
        <button className={classes.btn} onClick={Logout}>Logout</button>

      </div>
    </div>
  )
}
