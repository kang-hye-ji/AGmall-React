import {
    SaveAgree_USER,
    Register_USER,
    Register_POST_USER,
    Register_EMAIL_VALUE_USER
} from './types'
import axios from 'axios'

export function saveUserAgree(dataToSubmit){
    const request=axios.post('/api/agree/save', dataToSubmit)
        .then(response=>response.data)
    return{
        type:SaveAgree_USER, payload:request
    }
}
export function registerUser(dataToSubmit){
    const request=axios.post('/api/user/register', dataToSubmit)
        .then(response=>response.data)
    return{
        type:Register_USER, payload:request
    }
}
export function SavePostUserInfo(dataToSubmit){
    return{
        type:Register_POST_USER, payload:dataToSubmit
    }
}
export function SaveEmailCurVal(dataToSubmit){
    return{
        type:Register_EMAIL_VALUE_USER, payload:dataToSubmit
    }
}