import {SaveAgree_USER} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case SaveAgree_USER : 
            return{...state, agreeSave:action.payload}
        
        default:
            return state;
    }
}