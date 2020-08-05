import React from 'react'
import $ from "jquery";
import './QuickAndBest.css'

function QuickAndBest() {
    $(document).ready(function(){
        //best hover-button
        $('.Best .B_img button>div').hide();
        $('.Best>ul>li').on('mouseover',function(){
            $(this).siblings().find('button').fadeOut('fast');
            $(this).find('.B_img>img').siblings().fadeIn('fast');
        })
        $('.Best>ul>li').on('mouseleave',function(){
            $(this).find('.B_img>img').siblings().fadeOut('fast');
        })
        $('.Best>ul>li button').on('mouseover',function(){
            $(this).siblings().find('>div').fadeOut('fast');
            $(this).find('>div').fadeIn('fast');
        })
        $('.Best>ul>li button').on('mouseleave',function(){
            $(this).find('>div').fadeOut('fast');
        })
        //best hover-img
        $('.Best .B_img').on('mouseover',function(){
            $(this).find('>img').animate({
                width:'253px',
                height:'254.1px'
            },200/* ,'easeOutSine' */);
        })
        $('.Best .B_img').on('mouseleave',function(){
            $(this).find('>img').animate({
                width:'230px',
                height:'231px'
            },200/* ,'jswing' */);
        })
    })
    return (
        <div>
            <section className="Quick_Best">
                <div className="QBInner">
                    <article className="Quick">
                        <ul>
                            <li>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">
                                    <img src="/img/main/quick1.jpg" alt="AG몰 회원혜택 총집합 | 실버, 골드, VIP"/>
                                </a>
                            </li>
                            <li>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">
                                    <img src="/img/main/quick2.jpg" alt="내 눈에 딱! 맞는 제품 추천 | 눈 영양제 비교표"/>
                                </a>
                            </li>
                            <li>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self">
                                    <img src="/img/main/quick3.jpg" alt="안국건강 카카오톡 친구하면 적립금 3,000원 지급"/>
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className="Best">
                        <div><h2>베스트 상품</h2></div>
                        <ul>
                            <li>
                                <h3>BEST1</h3>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self" className="B_img">
                                    <button type="button" className="best_SB_btn1">
                                        <div><p>장바구니</p></div>
                                        <img className="1" alt="장바구니" src="/img/main/best_ico1.png"/>
                                    </button>
                                    <button type="button" className="best_SB_btn2">
                                        <div><p>찜하기</p></div>
                                        <img className="1" alt="찜하기" src="/img/main/best_ico2.png"/>
                                    </button>
                                    <img src="/img/main/best1.jpg" alt=""/>
                                </a>
                                <a className="B_tit" href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">아이세이프 루테인 3통Set 1박스</a>
                                <div>
                                    <del dateTime="2020-01-01T00:00">75,000원</del>
                                    <ins dateTime="2020-01-01T00:00">44,900원</ins>
                                    <strong>BEST</strong>
                                </div>
                            </li>
                            <li>
                                <h3>BEST2</h3>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self" className="B_img">
                                    <button type="button" className="best_SB_btn1">
                                        <div><p>장바구니</p></div>
                                        <img alt="장바구니" src="/img/main/best_ico1.png"/>
                                    </button>
                                    <button type="button" className="best_SB_btn2">
                                        <div><p>찜하기</p></div>
                                        <img alt="찜하기" src="/img/main/best_ico2.png"/>
                                    </button>
                                    <img src="/img/main/best2.jpg" alt=""/>
                                </a>
                                <a className="B_tit" href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">안국 루테인지아잔틴 플러스 90캡슐</a>
                                <div>
                                    <del dateTime="2020-01-01T00:00">90,000원</del>
                                    <ins dateTime="2020-01-01T00:00">45,900원</ins>
                                    <strong>BEST</strong>
                                </div>
                            </li>
                            <li>
                                <h3>BEST3</h3>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self" className="B_img">
                                    <button type="button" className="best_SB_btn1">
                                        <div><p>장바구니</p></div>
                                        <img alt="장바구니" src="/img/main/best_ico1.png"/>
                                    </button>
                                    <button type="button" className="best_SB_btn2">
                                        <div><p>찜하기</p></div>
                                        <img alt="찜하기" src="/img/main/best_ico2.png"/>
                                    </button>
                                    <img src="/img/main/best3.jpg" alt=""/>
                                </a>
                                <a className="B_tit" href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">NEW 눈에 좋은 루테인 플러스 180캡슐(PTP)</a>
                                <div>
                                    <del dateTime="2020-01-01T00:00">90,000원</del>
                                    <ins dateTime="2020-01-01T00:00">46,900원</ins>
                                </div>
                            </li>
                            <li>
                                <h3>BEST4</h3>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self" className="B_img">
                                    <button type="button" className="best_SB_btn1">
                                        <div><p>장바구니</p></div>
                                        <img alt="장바구니" src="/img/main/best_ico1.png"/>
                                    </button>
                                    <button type="button" className="best_SB_btn2">
                                        <div><p>찜하기</p></div>
                                        <img alt="찜하기" src="/img/main/best_ico2.png"/>
                                    </button>
                                    <img src="/img/main/best4.jpg" alt=""/>
                                </a>
                                <a className="B_tit" href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">안국 알티지 RTG 오메가3 2통</a>
                                <div>
                                    <del dateTime="2020-01-01T00:00">60,000원</del>
                                    <ins dateTime="2020-01-01T00:00">39,000원</ins>
                                </div>
                            </li>
                            <li>
                                <h3>BEST5</h3>
                                <a href="!#" onClick={e=>{e.preventDefault();}} title="" target="_self" className="B_img">
                                    <button type="button" className="best_SB_btn1">
                                        <div><p>장바구니</p></div>
                                        <img alt="장바구니" src="/img/main/best_ico1.png"/>
                                    </button>
                                    <button type="button" className="best_SB_btn2">
                                        <div><p>찜하기</p></div>
                                        <img alt="찜하기" src="/img/main/best_ico2.png"/>
                                    </button>
                                    <img src="/img/main/best5.jpg" alt=""/>
                                </a>
                                <a className="B_tit" href="!#" onClick={e=>{e.preventDefault();}} target="_self" title="">안국 루테인지아잔틴 포뮬라 4박스</a>
                                <div>
                                    <del dateTime="2020-01-01T00:00">100,000원</del>
                                    <ins dateTime="2020-01-01T00:00">69,900원</ins>
                                </div>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default QuickAndBest
