import {
    CATEGORY_PRODUCT,
    SAVE_RECENT_VIEW_PRODUCT,
    IMPORT_RECENT_VIEW_PRODUCT
} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case CATEGORY_PRODUCT : 
            return{...state, category:action.payload}

        case SAVE_RECENT_VIEW_PRODUCT :
            return{...state, saveRecentViewProd:action.payload}
        
        case IMPORT_RECENT_VIEW_PRODUCT :
            return{...state, RecentViewProd:action.payload}

        default:
            return state;
    }
}