import {
    CATEGORY_PRODUCT
} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case CATEGORY_PRODUCT : 
            return{...state, category:action.payload}

        default:
            return state;
    }
}