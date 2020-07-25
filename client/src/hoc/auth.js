import React, {useEffect} from 'react';
import {auth} from '../_actions/user_action/'
import {useSelector, useDispatch} from 'react-redux'

export default function (SpecificComponent, option, adminRoute=null) {
    function AuthenticationCheck(props){
        const user = useSelector(state => state.user);
        const dispatch = useDispatch()
        
        useEffect(() => {
            dispatch(auth()).then(response=>{
                //로그인 x
                
            })
            return () => {
                cleanup
            }
        }, [input])
    }
    return AuthenticationCheck
}