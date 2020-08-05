import React, {useEffect} from 'react';
import {auth} from '../_actions/user_action'
import {useSelector, useDispatch} from 'react-redux'

export default function (SpecificComponent, option) {
    function AuthenticationCheck(props){
        const user = useSelector(state => state.user);
        const dispatch = useDispatch()
        
        useEffect(() => {
            dispatch(auth()).then(response=>{
                //로그인 x
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                }
                //로그인 o
                else{
                    // 로그인 상태인데, When 로그인 페이지로 Go
                    if(option===false){
                        props.history.push('/')
                    }
                }
            })
            
        }, [])
        return(
            <SpecificComponent {...props} user={user}/>
        )
    }
    return AuthenticationCheck
}