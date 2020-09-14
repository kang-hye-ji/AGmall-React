import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import './MyPage.css'

function MyPage() {
    const user = useSelector(state => state.user);
    const [userInfo, setuserInfo] = useState()
    useEffect(() => {
        if(user.userData){
            let body={userId:user.userData._id}
            Axios.post('https://agmall.herokuapp.com/api/user/userInfo',body)
            .then(response=>{
                if(response.data.success){
                    setuserInfo(response.data.user)
                }else{
                    alert('사용자 정보를 가져오는 데 실패했습니다.')
                }
                
            })
        }
    }, [user.userData])
    return (
        <div>
            <Header/>
            <div className="mypageWrap">
                <aside>
                    <button type="button">OPEN</button>
                    <ul>
                        <li>
                            <h3>쇼핑정보</h3>
                            <ol>
                                <li><a href="!#" target="_self">주문목록/배송조회</a></li>
                                <li><a href="!#" target="_self">취소/반품/교환 내역</a></li>
                                <li><a href="!#" target="_self">환불/입금 내역</a></li>
                                <li><a href="!#" target="_self">찜리스트</a></li>
                            </ol>
                        </li>
                        <li>
                            <h3>혜택관리</h3>
                            <ol>
                                <li><a href="!#" target="_self">쿠폰</a></li>
                                <li><a href="!#" target="_self">마일리지</a></li>
                            </ol>
                        </li>
                        <li>
                            <h3>고객센터</h3>
                            <ol>
                                <li><a href="!#" target="_self">1:1문의</a></li>
                            </ol>
                        </li>
                        <li>
                            <h3>회원정보</h3>
                            <ol>
                                <li><a href="!#" target="_self">회원정보 변경</a></li>
                                <li><a href="!#" target="_self">회원 탈퇴</a></li>
                                <li><a href="!#" target="_self">배송자 관리</a></li>
                            </ol>
                        </li>
                        <li><h3>나의 상품 문의</h3></li>
                        <li><h3>나의 상품 후기</h3></li>
                    </ul>
                </aside>
                <article className="myInfo">
                    <ul>
                        <li>
                            {userInfo &&
                                <React.Fragment>
                                    <p>{`${userInfo.name}님의`}</p>
                                    <h3>{`회원등급은 ${userInfo.class}등급 입니다.`}</h3>
                                </React.Fragment>
                            }
                            <div className="classButton">
                                <button type="button">등급혜택보기</button>
                                <div className="classBenefit">
                                    <div className="classBenefit_tit">
                                        <h3>등급혜택 안내</h3>
                                        <button title="닫기" type="button"><img alt="닫기" src="#"/></button>
                                    </div>
                                    <dl>
                                        <dt>회원 등급</dt>
                                        <dd>{`등급`}</dd>
                                        <dt>추가 할인</dt>
                                        <dd>0원 이상 구매시 상품 판매금액의 0.0% 추가 할인</dd>
                                        <dt>중복 할인</dt>
                                        <dd>0원 이상 구매시 상품 판매금액의 0.0% 추가 할인</dd>
                                        <dt>추가 적립</dt>
                                        <dd>10원 이상 구매 시 구매금액당 3.0% 추가 적립</dd>
                                    </dl>
                                    <strong>※ 회원등급은 1개월마다 1일, 직전 3개월간의 결제 금액에 따라 자동으로 등급조정 됩니다.</strong>
                                </div>
                                <a href="!#" onClick={e=>{e.preventDefault()}} target="_self">회원정보수정</a>
                            </div>
                        </li>
                        <li>
                            <h3>마일리지</h3>
                            <p>
                                <a href="!#" onClick={e=>{e.preventDefault()}} target="_self">0</a>원
                            </p>
                        </li>
                        <li>
                            <h3>쿠폰</h3>
                            <p>
                                <a href="!#" onClick={e=>{e.preventDefault()}} target="_self">1</a>장
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="orderInProgress">
                    <h2>진행 중인 주문<span>최근 30일 내에 진행중인 주문정보입니다.</span></h2>
                    <ul className="">
                        <li>
                            <ol className="progress">
                                <li>
                                    <h3>입금대기</h3>
                                    <p>0</p>
                                </li>
                                <li>
                                    <h3>결제완료</h3>
                                    <p>0</p>
                                </li>
                                <li>
                                    <h3>상품준비중</h3>
                                    <p>0</p>
                                </li>
                                <li>
                                    <h3>배송중</h3>
                                    <p>0</p>
                                </li>
                                <li>
                                    <h3>배송완료</h3>
                                    <p>0</p>
                                </li>
                                <li>
                                    <h3>구매확정</h3>
                                    <p>0</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <ol className="refund">
                                <li>
                                    <h3>취소</h3>
                                    <p><span>0</span>건</p>
                                </li>
                                <li>
                                    <h3>교환</h3>
                                    <p><span>0</span>건</p>
                                </li>
                                <li>
                                    <h3>반품</h3>
                                    <p><span>0</span>건</p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </article>
                <article className="recentOrder">
                    <h2>최근 주문 정보<span>최근 30일 내에 주문하신 내역입니다.</span></h2>
                    <a href="!#" target="_self">더보기</a>
                    <table>
                        <thead>
                            <tr>
                                <th>날짜/주문번호</th>
                                <th>상품명/옵션</th>
                                <th>상품금액/수량</th>
                                <th>주문상태</th>
                                <th>확인/리뷰</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </article>
                <article className="recentView">
                    {userInfo && 
                        <h2>최근 본 상품<span>{`${userInfo.name}님께서 본 최근 상품입니다.`}</span></h2>
                    }
                    <ul>
                        <li>
                            <div className="recentCont">
                                <a href="!#" target="_self" className="productImg">
                                    <img src="/img/mypage/601_main_060.jpg" alt="상품"/>
                                    <div>
                                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                                    </div>
                                </a>
                                <a href="!#" target="_self" className="productName">
                                    <h3>코박사키즈 1통</h3>
                                </a>
                            </div>
                            <span>25,000원</span>
                        </li>
                        <li>
                            <div className="recentCont">
                                <a href="!#" target="_self" className="productImg">
                                    <img src="/img/mypage/601_main_060.jpg" alt="상품"/>
                                    <div>
                                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                                    </div>
                                </a>
                                <a href="!#" target="_self" className="productName">
                                    <h3>코박사키즈 1통</h3>
                                </a>
                            </div>
                            <span>25,000원</span>
                        </li>
                        <li>
                            <div className="recentCont">
                                <a href="!#" target="_self" className="productImg">
                                    <img src="/img/mypage/601_main_060.jpg" alt="상품"/>
                                    <div>
                                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                                    </div>
                                </a>
                                <a href="!#" target="_self" className="productName">
                                    <h3>코박사키즈 1통</h3>
                                </a>
                            </div>
                            <span>25,000원</span>
                        </li>
                        <li>
                            <div className="recentCont">
                                <a href="!#" target="_self" className="productImg">
                                    <img src="/img/mypage/601_main_060.jpg" alt="상품"/>
                                    <div>
                                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                                    </div>
                                </a>
                                <a href="!#" target="_self" className="productName">
                                    <h3>코박사키즈 1통</h3>
                                </a>
                            </div>
                            <span>25,000원</span>
                        </li>
                        <li>
                            <div className="recentCont">
                                <a href="!#" target="_self" className="productImg">
                                    <img src="/img/mypage/601_main_060.jpg" alt="상품"/>
                                    <div>
                                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                                    </div>
                                </a>
                                <a href="!#" target="_self" className="productName">
                                    <h3>코박사키즈 1통</h3>
                                </a>
                            </div>
                            <span>25,000원</span>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </div>
    )
}

export default MyPage
