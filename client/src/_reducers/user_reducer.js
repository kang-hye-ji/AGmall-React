import {
    SaveAgree_USER,
    SaveMemberMsgTarget_USER,
    Register_USER,
    ID_DUPL_CHECK_USER,
    Register_POST_USER,
    Register_POST_DETAIL_USER,
    AUTH_USER
} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case SaveAgree_USER : 
            return{...state, agreeSave:action.payload}

        case SaveMemberMsgTarget_USER : 
            return{...state, memberMsgTarget:action.payload}
        
        case Register_USER:
            return{...state, register:action.payload}

        case ID_DUPL_CHECK_USER:
            return{...state, idDupliCheck:action.payload}

        case Register_POST_USER:
            return{...state, postInfo:action.payload}
        
        case Register_POST_DETAIL_USER:
            return{...state, postDetailInfo:action.payload}

        case AUTH_USER:
            return{...state, userData:action.payload}

        default:
            return state;
    }
}