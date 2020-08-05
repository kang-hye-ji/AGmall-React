import React from 'react';
import {useSelector} from 'react-redux';

export function Register_AG_2_restrict(RegisterAG2stepComponent){
    function CheckGoTo2step(props){
        const user = useSelector(state => state.user);
        if(!user.agreeSave || user.agreeSave.agreeUsage===false || user.agreeSave.agreePersonal===false){
            props.history.push('/register_agmall');
        }
        return <RegisterAG2stepComponent {...props} />
    }
    return CheckGoTo2step
}

export function Register_AG_3_restrict(RegisterAG3stepComponent){
    function CheckGoTo3step(props){
        const user = useSelector(state => state.user);
        if(!user.memberMsgTarget){
            props.history.push('/register_agmall');
        }
        return <RegisterAG3stepComponent {...props} />
    }
    return CheckGoTo3step
}

