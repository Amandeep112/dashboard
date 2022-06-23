import React from 'react'
import { Link } from 'react-router-dom'
import classes from './user.module.css'
export default function User( {item,index,onDelete}) {

  return (
    < >
             <td>{index+1}</td>
             <td>{item.name}</td>
             <td>{item.email}</td>
             <td>{item.city}</td>
             <td>{item.phone}</td>
             <td>
              <Link to={`/edit/${item.id}`}>
              <button className={classes.editbtn}><i className="fa-solid fa-pen"></i></button>   
              </Link> 
               <button className={classes.deletebtn} onClick={()=>onDelete(item.id)}><i className="fa-solid fa-trash"></i></button>
             </td>
    </ >
  )
}
