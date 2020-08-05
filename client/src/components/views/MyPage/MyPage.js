import React, {useEffect} from 'react'
import Header from '../Header/Header'

function MyPage() {
    useEffect(() => {
        
    }, [])
    return (
        <div>
            <Header/>
            <div className="mypageWrap">
                <article className="myInfo">
                    <ul>
                        <li>
                            <p>{`${value}님의`}</p>
                            <h3>{`회원등급은 ${value}등급 입니다.`}</h3>
                            <div className="classButton">
                                <button type="button">등급혜택보기</button>
                                <a href="!#" onClick={e=>{e.preventDefault()}} target="_self">회원정보수정</a>
                                <div className="classBenefit">
                                    <div className="classBenefit_tit">
                                        <h2>등급혜택 안내</h2>
                                        <button title="닫기" type="button"><img alt="닫기" src="#"/></button>
                                    </div>
                                    <dl>
                                        <dt>회원 등급</dt>
                                        <dd>{`${value}등급`}</dd>
                                        <dt>추가 할인</dt>
                                        <dd>0원 이상 구매시 상품 판매금액의 0.0% 추가 할인</dd>
                                        <dt>중복 할인</dt>
                                        <dd>0원 이상 구매시 상품 판매금액의 0.0% 추가 할인</dd>
                                        <dt>추가 적립</dt>
                                        <dd>10원 이상 구매 시 구매금액당 3.0% 추가 적립</dd>
                                    </dl>
                                    <strong>※ 회원등급은 1개월마다 1일, 직전 3개월간의 결제 금액에 따라 자동으로 등급조정 됩니다.</strong>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h3>마일리지</h3>
                            <p>
                                <a href="!#" onClick={e=>{e.preventDefault}} target="_self">0</a>원
                            </p>
                        </li>
                        <li>
                            <h3>쿠폰</h3>
                            <p>
                                <a href="!#" onClick={e=>{e.preventDefault}} target="_self">1</a>장
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="orderInProgress">
                    
                </article>
                <article className="recentOrder">

                </article>
                <article className="recentView">

                </article>
            </div>
        </div>
    )
}

export default MyPage
