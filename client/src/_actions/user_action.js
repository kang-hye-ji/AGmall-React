import {
    SaveAgree_USER,
    SaveMemberMsgTarget_USER,
    Register_USER,
    ID_DUPL_CHECK_USER,
    Register_POST_USER,
    Register_POST_DETAIL_USER,
    AUTH_USER,
} from './types'
import axios from 'axios'

export function saveUserAgree(dataToSubmit){
    return{
        type:SaveAgree_USER, payload:dataToSubmit
    }
}
export function saveMemberMsgTarget(dataToSubmit){
    return{
        type:SaveMemberMsgTarget_USER, payload:dataToSubmit
    }
}
export function registerUser(dataToSubmit){
    const request=axios.post('/api/user/register', dataToSubmit)
        .then(response=>response.data)
    return{
        type:Register_USER, payload:request
    }
}
export function IdDuplCheck(dataToSubmit){
    const request=axios.post('/api/user/register/idDuplCheck', dataToSubmit)
        .then(response=>response.data)
    return{
        type:ID_DUPL_CHECK_USER, payload:request
    }
}
export function SavePostUserInfo(dataToSubmit){
    return{
        type:Register_POST_USER, payload:dataToSubmit
    }
}
export function SavePostDetailUserInfo(dataToSubmit){
    return{
        type:Register_POST_DETAIL_USER, payload:dataToSubmit
    }
}
export function auth(){
    const request=axios.get('/api/user/auth')
        .then(response=>response.data)
    return{
        type:AUTH_USER, payload:request
    }
}