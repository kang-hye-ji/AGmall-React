import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="guide">
                    <div className="guideInner">
                        <ul>
                            <li><a href="!#" title="" target="_self">회사소개</a></li>
                            <li><a href="!#" title="" target="_self">이용약관</a></li>
                            <li><a href="!#" title="" target="_self">개인정보처리방침</a></li>
                            <li><a href="!#" title="" target="_self">이용안내</a></li>
                            <li><a href="!#" title="" target="_self">고객센터</a></li>
                            <li><a href="!#" title="" target="_self">대량구매/광고/제휴 문의</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerInner">
                        <ul>
                            <li>
                                <h1 className="footerLogo">
                                    <img src="/img/layout/AGmall_footerlogo.png" alt="안국건강 로고"/>
                                </h1>
                                <address>
                                    <span>안국건강</span>
                                    <span>대표 | 어광, 유명한</span>
                                    <span>사업자등록번호 | 124-86-00538</span>
                                    <br/>
                                    <span>통신판매업 신고 | 2004-00122</span>
                                    <a href="!#" title="사업자번호조회 새창" target="_blank">사업자번호조회</a>
                                    <br/>
                                    <span>서울본사 | 서울특별시 강남구 영동대로 511 (트레이드타워) 11층(1101호)</span>
                                    <br/>
                                    <span>화성물류창고 | 18608 경기도 화성시 향남읍 하길리 1408-17</span>
                                    <br/>
                                    <span>개인정보보호책임자 | 이상조</span>
                                    <p className="copyright">Copyright © <strong>안국건강</strong> All rights reserved.</p>
                                </address>
                            </li>
                            <li>
                                <h3>고객센터</h3>
                                <p>1899 5707</p>
                                <div>
                                    <span>월~금 09:00~18:00</span>
                                    <span>점심시간 12:30~13:30</span>
                                    <span>공휴일/주말 휴무</span>
                                </div>
                            </li>
                            <li>
                                <ol className="GoPage">
                                    <li>
                                        <a href="!#" title="" target="_self">
                                            <img src="/img/layout/GoPage1.png" alt="안국건강 미디어"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="!#" title="" target="_self">
                                            <img src="/img/layout/GoPage2.png" alt="안국건강 브랜드"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="!#" title="" target="_self">
                                            <img src="/img/layout/GoPage3.png" alt="자주묻는 질문"/>
                                        </a>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
