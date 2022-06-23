
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { useNavigate } from 'react-router-dom';
import { logIn } from '../../Redux/action';
import classes from './login.module.css'
export default function Login() {
    const { ValidUser } = useSelector(state => state.user)
    const ValidateUser = ValidUser.find((item) => item)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [user, setuser] = useState({
        username: '',
        password: '',
    });



    const Inputchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const LoginSub = (e) => {
        e.preventDefault()
        if (ValidateUser.username === user.username && ValidateUser.password === user.password) {
            dispatch(logIn())
            window.localStorage.setItem('login', JSON.stringify(user))
            navigate('/sidebar')
        }
        else {
            setError('Invalid,Please check your username or password')
        }


    }
    return (
        <div className={classes.container} >
            <form className={classes.form} onSubmit={(e) => LoginSub(e)} >
                <div >
                    <label id={classes.label}>Email</label>
                    <div>
                        <input id={classes.input}
                            type="text"
                            name='username'
                            value={user.username}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            onChange={(e) => Inputchange(e)}
                            required
                        ></input>
                    </div>
                    <div>
                        <span>username</span>
                    </div>
                    <label id={classes.label}>Password</label>
                    <div>
                        <input id={classes.input}
                            type="text"
                            name='password'
                            // pattern="^[A-Za-z1-9]{3,16}$"
                            value={user.password}
                            onChange={(e) => Inputchange(e)}
                            required
                        ></input>
                    </div>
                    <div>
                   <span>
                        {error} 
                       </span>
                    </div>
                    <div>
                        <span>password </span>
                    </div>


                    <button className={classes.btn} type='submit'>Login</button>
                </div>
            </form >
        </div>
    )
}
