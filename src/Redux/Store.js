 import { createStore ,applyMiddleware } from  "redux";
import rootreducer from './rootreducer'
import reduxThunk from 'redux-thunk'



const store=createStore(rootreducer,applyMiddleware(reduxThunk))
 
export default store