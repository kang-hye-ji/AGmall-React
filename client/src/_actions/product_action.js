import {
    CATEGORY_PRODUCT
} from './types'
import axios from 'axios'

export function WhatIsCategory(dataToSubmit){
    return{
        type:CATEGORY_PRODUCT, payload:dataToSubmit
    }
}
/* export function registerUser(dataToSubmit){
    const request=axios.post('/api/user/register', dataToSubmit)
        .then(response=>response.data)
    return{
        type:Register_USER, payload:request
    }
} */