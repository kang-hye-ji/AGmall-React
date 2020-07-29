import React, {useState} from 'react'
import Header from '../Header/Header'
import './LoginPage.css'

function LoginPage() {
    const [IdValue, setIdValue] = useState("")
    return (
        <div>
            <Header/>
            <div style={{padding:'100px 0'}}>
                <div className="loginWrap">
                    <h2 className="loginTitle">로그인</h2>
                    <form className="memberLogin">
                        <fieldset>
                            <h3>회원 로그인</h3>
                            <div className="idAndPW">
                                <input type="text" placeholder="아이디" value={IdValue}/><br/>
                                <input type="password" placeholder="비밀번호"/>
                            </div>
                            <button className="loginBtn">로그인</button>
                            <input type="checkbox" id="idSave"/><label htmlFor="idSave">아이디 저장</label>
                        </fieldset>
                    </form>
                    <ul className="snsLogin">
                        <li>
                            <a href="!#" target="_self" title="">
                                <img src="/img/register/login-naver.png" alt="네이버"/>
                                <span>아이디 로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" target="_self" title="">
                                <img src="/img/register/login-kakao.png" alt="카카오톡"/>
                                <span>아이디 로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="!#" target="_self" title="">
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