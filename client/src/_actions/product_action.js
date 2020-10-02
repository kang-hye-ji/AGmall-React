import {
    CATEGORY_PRODUCT,
    IMPORT_PROD_PRODUCT,
    SAVE_RECENT_VIEW_PRODUCT,
    IMPORT_RECENT_VIEW_PRODUCT
} from './types'
import axios from 'axios'

const config={
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json',
        Cache:'no-cache'
    },
    withCredentials: true
}

export function WhatIsCategory(dataToSubmit){
    return{
        type:CATEGORY_PRODUCT, payload:dataToSubmit
    }
}
export function ImportProd(dataToSubmit){
    const request=axios.post('/api/product/prodDetail', dataToSubmit, config)
        .then(response=>response.data)
    return{
        type:SAVE_RECENT_VIEW_PRODUCT, payload:request
    }
}
export function SaveRecentViewProd(dataToSubmit){
    const request=axios.post('/api/product/saveRecentView', dataToSubmit, config)
        .then(response=>response.data)
    return{
        type:IMPORT_PROD_PRODUCT, payload:request
    }
}
export function ImportRecentViewProd(dataToSubmit){
    const request=axios.post('/api/product/importRecentView', dataToSubmit, config)
        .then(response=>response.data)
    return{
        type:IMPORT_RECENT_VIEW_PRODUCT, payload:request
    }
}
