import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Side from "../side/Side";
import Navbar from "../navbar/Navbar";
import classes from '../Adduser/adduser.module.css'
import { singleEditUser, updateUser } from '../../Redux/action';

export default function Edituser() {

  const { singleuser } = useSelector(state => state.user)
 
  const { id } = useParams()


  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(singleEditUser(id))
  }, [dispatch, id]);
  const [state, setstate] = useState({
    id:id,
    name: '',
    email: '',
    city: '',
    phone: '',
  })
  useEffect(() => {
    if (singleuser) {
      setstate({ ...singleuser })
    }
  }, [singleuser])
  const {  name, email, city, phone } =state
  const onchange = (e) => {
    e.preventDefault()
    setstate({ ...state, [e.target.name]: e.target.value })

  }
  const onSubmitEditUser = (e) => {
    e.preventDefault()
     dispatch(updateUser(state,id))
    navigate('/userlist')
  } 
  const handleKeyDown = (e) => {
    if (e.key === " " && name.length === 0) {
      e.preventDefault();
    }
  };
  return (
    <div className={classes.home}>
      <Side />
      <div className={classes.homeContainer}>
        <Navbar />
        <div className={classes.addContainter}>
          <form onSubmit={onSubmitEditUser}>
            <div>
              <label id={classes.label}>Name</label>
              <div className='userInput'>
                <input id={classes.inputs}
                  type='text'
                  name='name'
                  pattern="^[A-Za-z]{3,16}$"
                  maxLength='16'
                  value={name || ''}
                  onKeyDown={handleKeyDown}
                  placeholder='enter name'
                  onChange={(e) => onchange(e)} required></input>
              </div>
              <label id={classes.label}>Email</label>
              <div className='userInput'>
                <input id={classes.inputs}
                  type='email'
                  name='email'
                  value={email  || ''}
                  onKeyDown={handleKeyDown}
                  placeholder='email'
                  onChange={(e) => onchange(e)} required></input>

              </div>
              <label id={classes.label}>From</label>
              <div className='userInput'>
                <input id={classes.inputs}
                  type='text'
                  name='city'
                  pattern="^[A-Za-z]{3,16}$"
                  maxLength='16'
                  onKeyDown={handleKeyDown}
                  value={city  || ''}
                  placeholder='enter name'
                  onChange={(e) => onchange(e)} required></input>

              </div>
              <label id={classes.label}>phone</label>
              <div className='userInput'>
                <input id={classes.inputs}
                  type='tel'
                  pattern='[0-9]{10}'
                  maxLength='10'
                  name='phone'
                  onKeyDown={handleKeyDown}
                  value={phone  || ''}
                  placeholder='phone'
                  onChange={(e) => onchange(e)} required></input>
              </div>
              <button className={classes.btn} type='submit'>update</button>
            </div>
          </form>
        </div>  
      </div>
    </div>
  )
}
