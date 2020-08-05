import React from 'react'
import Header from '../Header/Header'
import './Register.css'

function RegisterPage() {
    return (
        <div>
            <Header/>
            <div style={{padding:'100px 0'}}>
                <div className="registerWrap">
                    <a href="/register_agmall" target="_self" title="">
                        <img src="/img/register/logo-agmall.png" alt="AG mall"/>
                        <span>안국건강 회원가입</span>
                    </a>
                    <ul className="snsRegister">
                        <li>
                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">
                                <img src="/img/register/login-naver.png" alt="네이버"/>
                                <span>아이디 회원가입</span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">
                                <img src="/img/register/login-kakao.png" alt="카카오톡"/>
                                <span>아이디 회원가입</span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">
                                <img src="/img/register/login-facebook.png" alt="페이스북"/>
                                <span>아이디 회원가입</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="loginGo">이미 쇼핑몰 회원이세요? <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">로그인</a></p>
            </div>
        </div>
    )
}

export default RegisterPage

