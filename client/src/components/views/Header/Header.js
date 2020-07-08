import React, {useEffect} from 'react'
import jQuery from "jquery";
import './Header.css'
import './HeaderJquery'

function Header() {
    useEffect(() => {
        window.$ = window.jQuery = jQuery;
    }, [])
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
                                <a href="!#" title="" target="_self">
                                    <img src="/img/layout/searchBt_fit.jpg" alt="맞춤검색"/>
                                </a>
                            </div>
                            <ul className="info">
                                <li><a href="!#" title="" target="_self">로그인</a></li>
                                <li>
                                    <a href="/register" title="" target="_self">회원가입</a>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">장바구니
                                        <p className="shoppingBN">0</p>
                                    </a>
                                </li>
                                <li><a href="!#" title="" target="_self">고객센터</a></li>
                                <li><p className="signEvent">+3,000P</p></li>
                            </ul>
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
                                            <a href="!#" target="_self" tile="">눈건강</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">인생뷰티</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">안심비타민</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">코박사</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">건강기능식품</a>
                                            <ol>
                                                <li><a href="!#" target="_self" title="">오메가3</a></li>
                                                <li><a href="!#" target="_self" title="">밀크씨슬</a></li>
                                                <li><a href="!#" target="_self" title="">쏘팔메토</a></li>
                                                <li><a href="!#" target="_self" title="">그린프로폴리스</a></li>
                                                <li><a href="!#" target="_self" title="">코엔자임Q10</a></li>
                                            </ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">선물세트</a>
                                            <ol></ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">이벤트</a>
                                            <ol>
                                                <li><a href="!#" target="_self" title="">진행중인 이벤트</a></li>
                                                <li><a href="!#" target="_self" title="">당첨자 발표</a></li>
                                            </ol>
                                        </li>
                                        <li>
                                            <a href="!#" target="_self" tile="">안국건강</a>
                                            <ol>
                                                <li><a href="!#" target="_self" title="">전체 리뷰보기</a></li>
                                                <li><a href="!#" target="_self" title="">브랜드스토리</a></li>
                                                <li><a href="!#" target="_self" title="">미디어</a></li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="mainMenu">
                                <li>
                                    <a href="!#" title="" target="_self">눈건강</a>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">인생뷰티</a>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">안심비타민</a>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">코박사</a>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">건강기능식품</a>
                                    <div className="mainMenuDrop">
                                        <a href="!#" title="" target="_self">건강기능식품</a>
                                        <ol>
                                            <li><a href="!#" title="" target="_self">오메가3</a></li>
                                            <li><a href="!#" title="" target="_self">밀크씨슬</a></li>
                                            <li><a href="!#" title="" target="_self">쏘팔메토</a></li>
                                            <li><a href="!#" title="" target="_self">그린프로폴리스</a></li>
                                            <li><a href="!#" title="" target="_self">코엔자임Q10</a></li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">선물세트</a>
                                </li>
                                <li>
                                    <a href="!#" title="" target="_self">이벤트</a>
                                    <div className="mainMenuDrop">
                                        <a href="!#" title="" target="_self">이벤트</a>
                                        <ol>
                                            <li><a href="!#" title="" target="_self">진행중인 이벤트</a></li>
                                            <li><a href="!#" title="" target="_self">당첨자 발표</a></li>
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

export default Header
