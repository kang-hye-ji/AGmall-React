import {
    SaveAgree_USER,
    Register_USER
} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case SaveAgree_USER : 
            return{...state, agreeSave:action.payload}
        
        case Register_USER:
            return{...state, register:action.payload}
        default:
            return state;
    }
}