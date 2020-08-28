import React, {useEffect} from 'react'
import jQuery from "jquery";
import {useSelector, useDispatch} from 'react-redux'
import './Header.css'
import './HeaderJquery'
import { withRouter } from 'react-router-dom';
import {logoutFunc} from '../../../_actions/user_action'

function Header(props) {
    useEffect(() => {
        window.$ = window.jQuery = jQuery;
    }, [])
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        dispatch(logoutFunc())
        .then(response=>{
            if(response.payload.success){
                props.history.push('/login');
            }else{
                alert('로그아웃하는 데 실패했습니다.')
            }
        })
    }
    return (
        <div>
            <header>
                <div className="headerInner">
                    <div className="mainHead">
                        <div className="mainHeadInner">
                            <h1 className="logo">
                                <a href="/" title="AGmall 메인페이지" target="_self">
                                    <img src="/img/layout/AGmall_logo.png" alt="AGmall"/>
                                </a>
                            </h1>
                            <div className="search">
                                <form>
                                    <input title="검색창" type="text" placeholder="루테인"/>
                                    <button type="button" className="searchBt">
                                        <img src="/img/layout/searchBt.png" alt="검색버튼"/>
                                    </button>
                                </form>
                                <div className="recentSear">
                                    <h2>최근검색어</h2>
                                    <p>최근 검색어가 없습니다.</p>
                                </div>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">
                                    <img src="/img/layout/searchBt_fit.jpg" alt="맞춤검색"/>
                                </a>
                            </div>
                            { (user.userData && user.userData.isAuth===true) ?
                            <ul className="info_login">
                                <li>
                                    <a href="/mypage" title="" target="_self">마이페이지</a>
                                </li>
                                <li>
                                    <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">장바구니
                                        <p className="shoppingBN">0</p>
                                    </a>
                                </li>
                                <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">고객센터</a></li>
                                <li>
                                    <a href="/login" onClick={logoutHandler}>로그아웃</a>
                                </li>
                            </ul>
                            :
                                <ul className="info">
                                    <li><a href="/login" title="" target="_self">로그인</a></li>
                                    <li>
                                        <a href="/register" title="" target="_self">회원가입</a>
                                    </li>
                                    <li>
                                        <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">장바구니
                                            <p className="shoppingBN">0</p>
                                        </a>
                                    </li>
                                    <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">고객센터</a></li>
                                    <li><p className="signEvent">+3,000P</p></li>
                                </ul>
                            }
                        </div>
                    </div>
                    <nav>
                        <div className="navInner">
                            <div className="viewAll">
                                <button type="button"><img src="/img/layout/viewAllBt.jpg" alt="카테고리 전체보기 버튼"/></button>
                                <div className="viewAllCont">
                                    <h2>카테고리 전체보기</h2>
                                    <ul>
                                        <li>
                                            <a href="eye_prod_list" target="_self" tile="">눈건강</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="/beauty_prod_list" target="_self" tile="">인생뷰티</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="vitamin_prod_list" target="_self" tile="">안심비타민</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="nose_prod_list" target="_self" tile="">코박사</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="health_prod_list" target="_self" tile="">건강기능식품</a>
                                            <ol>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">오메가3</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">밀크씨슬</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">쏘팔메토</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">그린프로폴리스</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">코엔자임Q10</a></li>
                                            </ol>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" tile="">선물세트</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" tile="">이벤트</a>
                                            <ol>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">진행중인 이벤트</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">당첨자 발표</a></li>
                                            </ol>
                                        </li>
                                        <li>
                                            <a href="!#" onClick={e=>{e.preventDefault();}} target="_self" tile="">안국건강</a>
                                            <ol>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">전체 리뷰보기</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">브랜드스토리</a></li>
                                                <li><a href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">미디어</a></li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="mainMenu">
                                <li>
                                    <a href="eye_prod_list" title="" target="_self">눈건강</a>
                                </li>
                                <li>
                                    <a href="beauty_prod_list" title="" target="_self">인생뷰티</a>
                                </li>
                                <li>
                                    <a href="vitamin_prod_list" title="" target="_self">안심비타민</a>
                                </li>
                                <li>
                                    <a href="nose_prod_list" title="" target="_self">코박사</a>
                                </li>
                                <li>
                                    <a href="health_prod_list" title="" target="_self">건강기능식품</a>
                                    <div className="mainMenuDrop">
                                        <a href="health_prod_list" title="" target="_self">건강기능식품</a>
                                        <ol>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">오메가3</a></li>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">밀크씨슬</a></li>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">쏘팔메토</a></li>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">그린프로폴리스</a></li>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">코엔자임Q10</a></li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">선물세트</a>
                                </li>
                                <li>
                                    <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">이벤트</a>
                                    <div className="mainMenuDrop">
                                        <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">이벤트</a>
                                        <ol>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">진행중인 이벤트</a></li>
                                            <li><a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">당첨자 발표</a></li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default withRouter(Header)
