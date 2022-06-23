    import { createSlice } from "@reduxjs/toolkit";


const userinfo = createSlice({
    name: 'userdata',
    initialState: {
        database: [{
            name: "Satnam",
            email: "support@tru.agency",
            city: "Moga",
            phone: "1234566666",
            id: "1"
        },],
        user: null,

    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user=null
        },
        adduser: (state, actions) => {
            const newdata = actions.payload
            const database = state.database
             database.push(newdata)
             

            // console.log(state.database.length)
        },
        filterdata: (state, action) => {
            const id = action.payload
            const repo = state.database
            state.database = repo.filter(item => item.id !== id)

        },
        updateUser: (state, actions) => {
            const { id, name, email, phone, city } = actions.payload
            const existinguser = state.database.find(item => item.id === id)

            if (existinguser) {
                existinguser.name = name;
                existinguser.email = email;
                existinguser.city = city;
                existinguser.phone = phone;
            }
        }
    }
})
export const userAction = userinfo.actions
export default userinfo
// {
//     name: newdata.name,
//     email: newdata.email,
//     website: newdata.website,
//     phone: newdata.phone,
//     id: Math.random()
// }