import * as types from './actiontype';
import axios from 'axios';

//load user
const getUser = (user) => ({
    type: types.GET_USER,
    payloads: user,
})
const edituser = (user) => ({
    type: types.EDIT_USER,
    payloads: user
})
const deleteuser = () => ({
    type: types.DELETE_USER,
})
const updateuser = () => ({
    type: types.UPDATE_USER,

})
const adduser = () => ({
    type: types.ADD_USER,
})
const loginuser = (user) => ({
    type: types.LOGIN_USER,
    payloads: user
})
const logOutUser = (user) => ({
    type: types.LOGOUT_USER,
    payloads: user,
})
export const logOut = () => {
    return function (dispatch) {
       
        dispatch(logOutUser(false))
    }
}
export const logIn = () => {
    return function (dispatch) {
         
        dispatch(loginuser(true))
    }
}
export const loadUser = () => {
    return function (dispatch) {
        axios.get('http://localhost:5000/user').then((res) => {
            console.log(res.data);
            dispatch(getUser(res.data))
        }).catch((err) =>
            console.log("massage", err)
        )
    }
}
//deleted user

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/user/${id}`).then((res) => {
            console.log(res.data);
            dispatch(deleteuser())
            dispatch(loadUser())
        }).catch((err) =>
            console.log("massage", err)
        )
    }
}
//singleUser Edit
export const singleEditUser = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/user/${id}`).then((res) => {
            console.log(res.data);
            dispatch(edituser(res.data))
        }).catch((err) =>
            console.log("massage", err)
        )
    }
}
//update 
export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/user/${id}`, user).then((res) => {
            console.log(res.data);
            dispatch(updateuser())
        }).catch((err) =>
            console.log("massage", err)
        )
    }
}
//addUser
export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/user`, user).then((res) => {
            console.log(res.data);
            dispatch(adduser())
            dispatch(loadUser())
         }).catch((err) =>
            console.log("massage", err)
         )
    }
}
