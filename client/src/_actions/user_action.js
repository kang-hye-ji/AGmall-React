import {
    SaveAgree_USER
} from './types'
import axios from 'axios'

export function saveUserAgree(dataToSubmit){
    const request=axios.post('/api/agree/save', dataToSubmit)
                        .then(response=>response.data)

    return{
        type:SaveAgree_USER, payload:request
    }
}
