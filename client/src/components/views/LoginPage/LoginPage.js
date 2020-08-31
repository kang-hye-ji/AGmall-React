import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Axios from 'axios'
import Header from '../Header/Header'
import './LoginPage.css'
import {memberLogin, idSaveFunc} from '../../../_actions/user_action'

function LoginPage(props) {
    const dispatch = useDispatch()
    const [IdValue, setIdValue] = useState("")
    const [PWValue, setPWValue] = useState("")
    const [IdSaveChecked, setIdSaveChecked] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('idSave')==='true'){
            let variable={user_id:localStorage.getItem('user_id')}
            const config={
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json',
                    Cache:'no-cache'
                },
                withCredentials: true
            }
            Axios.post('/api/user/provideId',variable, config)
            .then(response=>{
                if(response.data.success){
                    setIdValue(response.data.userId)
                    setIdSaveChecked(true)
                }else{
                    alert('저장한 아이디 정보를 불러오는 데 실패했습니다.')
                }
            })
        }
    }, [])
    
    const memberLoginClick=(e)=>{
        // 아이디 저장 O
        if(IdSaveChecked){
            dispatch(idSaveFunc({loggedId:IdValue}))
            .then(response=>{
                if(response.payload.success){
                    // user_id Storage에 저장
                    localStorage.setItem('idSave',true);
                    localStorage.setItem('user_id',response.payload.user_id);
                    // 로그인
                    let variable={
                        userId:IdValue,
                        password:PWValue
                    }
                    dispatch(memberLogin(variable))
                    .then(response=>{
                        if(response.payload.loginSuccess){
                            props.history.push('/')
                        }else{
                            alert(response.payload.message)
                        }
                    })
                }else{
                    alert('아이디 저장에 실패했습니다.')
                }
            })
        }
        // 아이디 저장 X
        else if(!IdSaveChecked){
            localStorage.setItem('idSave',false);
            localStorage.removeItem('user_id');
            // 로그인
            let variable={
                userId:IdValue,
                password:PWValue
            }
            dispatch(memberLogin(variable))
            .then(response=>{
                if(response.payload.loginSuccess){
                    props.history.push('/')
                }else{
                    alert(response.payload.message)
                }
            })
        }
    }
    const IdSaveHandler=()=>{
        setIdSaveChecked(!IdSaveChecked)
    }
    return (
        <div>
            <Header/>
            <div style={{padding:'100px 0'}}>
                <div className="loginWrap">
                    <h2 className="loginTitle">로그인</h2>
                    <div className="memberLogin">
                        <form className>
                            <fieldset>
                                <h3>회원 로그인</h3>
                                <div className="idAndPW">
                                    <input type="text" placeholder="아이디" value={IdValue} onChange={e=>setIdValue(e.currentTarget.value)}/><br/>
                                    <input type="password" placeholder="비밀번호" value={PWValue} onChange={e=>setPWValue(e.currentTarget.value)}/>
                                </div>
                            </fieldset>
                        </form>
                        <button className="loginBtn" onClick={memberLoginClick}>로그인</button>
                        <input type="checkbox" id="idSave" checked={IdSaveChecked} onClick={IdSaveHandler}/><label htmlFor="idSave">아이디 저장</label>
                    </div>
                    <ul className="snsLogin">
                        <li>
                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">
                                <img src="/img/register/login-naver.png" alt="네이버"/>
                                <span>아이디 로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">
                                <img src="/img/register/login-kakao.png" alt="카카오톡"/>
                                <span>아이디 로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">
                                <img src="/img/register/login-facebook.png" alt="페이스북"/>
                                <span>아이디 로그인</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="ThreeBtn">
                        <li>
                            <a href="/register" target="_self">회원가입</a>
                        </li>
                        <li>
                            <a href="/" target="_self">아이디 찾기</a>
                        </li>
                        <li>
                            <a href="/" target="_self">비밀번호 찾기</a>
                        </li>
                    </ul>
                    <form className="nomember">
                        <fieldset>
                            <h3>비회원 주문조회</h3>
                            <div className="nameAndNum">
                                <input type="text" placeholder="주문자명"/><br/>
                                <input type="text" placeholder="주문번호"/>
                            </div>
                            <button className="nomemberCheck">확인</button>
                            <p>주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage