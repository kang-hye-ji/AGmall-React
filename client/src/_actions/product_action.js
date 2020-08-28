import {
    CATEGORY_PRODUCT
} from './types'
import axios from 'axios'

export function WhatIsCategory(dataToSubmit){
    return{
        type:CATEGORY_PRODUCT, payload:dataToSubmit
    }
}