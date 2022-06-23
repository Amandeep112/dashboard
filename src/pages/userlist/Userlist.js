 
import styles from './user.module.css'
import Side from '../side/Side'
import Navbar from '../navbar/Navbar'
import User from './User'
import classes from './userlist.module.css'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser ,deleteUser } from '../../Redux/action'
export default function UserList() {
 const data = useSelector(state=>state.user.database)
 const dispatch=useDispatch()
  useEffect(() => {
     dispatch(loadUser())
  }, []);
const onDelete=(id)=>{
  if(window.confirm('Are you sure want to delete this user')){

    dispatch(deleteUser(id))
  }
 
}
  return (
    <div className={classes.home}>
            
             <Side/>
             
            <div className={classes.homeContainer}>
                  <Navbar/> 
                  <div className={classes.tablecon}>

                  <table  >
        <thead> 
           <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

         { data.map((item,index)=>(
           <tr key={item.id}>
            <User  onDelete={onDelete} item={item} index={index}  />
             
           </tr>
         ))}
         </tbody>
         
      </table>
         </div>
      </div>
     
      </div>
     
  )
}


