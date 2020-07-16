import {
    SaveAgree_USER,
    Register_USER,
    Register_POST_USER,
    Register_EMAIL_VALUE_USER
} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case SaveAgree_USER : 
            return{...state, agreeSave:action.payload}
        
        case Register_USER:
            return{...state, register:action.payload}

        case Register_POST_USER:
            return{...state, postInfo:action.payload}

        case Register_EMAIL_VALUE_USER:
            return{...state, emailCurval:action.payload}

        default:
            return state;
    }
}