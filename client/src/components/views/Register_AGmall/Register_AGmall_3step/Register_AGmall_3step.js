import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Header from '../../Header/Header'
import {withRouter} from 'react-router-dom'
import {saveMemberMsgTarget} from '../../../../_actions/user_action'
import './Register_AGmall_3step.css'

function Register_AGmall_3step(props) {
    const memberName = useSelector(state => state.user.memberMsgTarget)
    const dispatch = useDispatch();
    return (
        <div>
            <Header/>
            <div className="register_ag_3step_wrap">
                <div className="top">
                    <h1>회원가입</h1>
                    <ol>
                        <li>01 약관동의</li>
                        <li>02 정보입력</li>
                        <li>03 가입완료</li>
                    </ol>
                </div>
                <div className="contWrap">
                    <div className="textBox">
                        <h3>회원가입이 완료 되었습니다.</h3>
                        <p><em>{memberName}</em>님의 회원가입을 축하합니다.<br/>알차고 실속있는 서비스로 찾아뵙겠습니다.</p>
                    </div>
                    <div className="stepBtn">
                        <button type="button" onClick={e=>{
                            props.history.push('/')
                            dispatch(saveMemberMsgTarget())}
                            }>홈으로</button>
                        <button type="button" onClick={e=>{
                            props.history.push('/login')
                            dispatch(saveMemberMsgTarget())
                        }}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register_AGmall_3step)
