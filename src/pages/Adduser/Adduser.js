import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Side from "../side/Side";
import Navbar from "../navbar/Navbar";
import classes from './adduser.module.css'
import { addUser } from "../../Redux/action";



export default function Adduser() {
    const { database } = useSelector(state => state.user )
    const data = database.map((item) => item.email )
    const dataphone = database.map((item) => item.phone)
    console.log('data=>', data ,'phone',dataphone);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [adduser, setadduser] = useState({

        name: '',
        email: '',
        city: '',
        phone: '',
    });

    const { name, email, city, phone } = adduser
    const onchange = (e) => {

        setadduser({ ...adduser, [e.target.name]: e.target.value })
    }
    const submitHandle = (e) => {
        e.preventDefault()
        if (data.includes(email) || dataphone.includes(phone)) {
            setError('email and Phone already exist in database please povide another')
        }
        else {
            dispatch(addUser(adduser))
            navigate('/userlist')
        }
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
                    <form onSubmit={(e) => submitHandle(e)} >
                        <div>
                            <label id={classes.label} >Name</label>
                            <div>
                                <input id={classes.inputs}
                                    type='text'
                                    name='name'
                                    pattern="^[A-Za-z]{3,16}$"
                                    maxLength='16'
                                    value={name}
                                    placeholder='Your name'
                                    onChange={(e) => onchange(e)}
                                    required></input>
                            </div>
                            <label id={classes.label}>Email</label>
                            <div>
                                <input
                                    id={classes.inputs}
                                    type='email'
                                    name='email'
                                    value={email}
                                    onKeyDown={handleKeyDown}
                                    placeholder='email'
                                    onChange={(e) => onchange(e)} required></input>
                            </div>
                            <p className={classes.error}>{error}</p>
                            <label id={classes.label}>City</label>
                            <div>
                                <input
                                    id={classes.inputs}
                                    type='text'
                                    name='city'
                                    value={city}
                                    pattern="^[A-Za-z ]{3,16}$"
                                    maxLength='15'

                                    placeholder='City name '
                                    onChange={(e) => onchange(e)} required></input>
                            </div>
                            <label id={classes.label}>phone</label>
                            <div  >
                                <input
                                    id={classes.inputs}
                                    type='tel'
                                    name='phone'
                                    pattern='[0-9]{10}'
                                    onKeyDown={handleKeyDown}
                                    maxLength='10'
                                    value={phone}
                                    placeholder='phone'
                                    onChange={(e) => onchange(e)} required></input>
                            </div>
                            <p className={classes.error}>{error}</p>

                            <button className={classes.btn} type='submit'>create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
