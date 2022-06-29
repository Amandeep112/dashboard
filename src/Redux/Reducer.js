import * as types from './actiontype'
const initialState = {
    database: [],
    singleuser: {},
    user: false,
    ValidUser: [{username:'amn199806@gmail.com',
                password:'1234567'},
                {username:'amn@gmail.com',
                password:'1234567@'},
]


}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                database: action.payloads,

            }
        case types.DELETE_USER:
        case types.UPDATE_USER:
        case types.ADD_USER:
            return {
                ...state,
            }
        case types.EDIT_USER:
            return {
                ...state,
                singleuser: action.payloads,
            }
        case types.LOGIN_USER:
            return{
                ...state,
                user:action.payloads,
            }
            case types.LOGOUT_USER:
                return{
                    ...state,
                    user:action.payloads
                }
        default: return state
    }

}

export default userReducer