import React from 'react' 
  import { Outlet,Navigate } from 'react-router-dom'

export default function Private(){ 
 
 const user=window.localStorage.getItem('login')
  return user? < Outlet/>:<Navigate to='/'/>  
}
