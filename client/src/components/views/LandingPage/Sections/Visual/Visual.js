import React, {useEffect} from 'react'
import Slider from "react-slick";
import jQuery from "jquery";
import './VisualJquery'
import './Visual.css'



function Visual() {
    useEffect(() => {
        window.$ = window.jQuery = jQuery;
        document.$ = document.jQuery = jQuery;
    }, [])
    const settings={
        dots:true,
        arrows:false,
        fade:true,
        autoplay:true
    }

    
    return (
        <div>
            <section className="visual">
                <Slider {...settings} className="visualSl">
                    <a href="!#" target="_self" className="visualSl_1">
                        안국건강 플러스 친구 | 카카오톡 플러스 친구하고 적립금 3000원 받으세요! | 즉시사용 가능한 적립금과 할인이벤트&건강정보 받아보세요
                    </a>
                    <a href="!#" target="_self" className="visualSl_2">
                        안국건강 친구추천 이벤트 | 안국건강을 친구에게 소개해주세요! | 친구와 내가 함께 받는 놀라운 혜택을 만나보세요
                    </a>
                    <a href="!#" target="_self" className="visualSl_3">
                        AGmall 가입 이벤트 | 안국건강 가입하면 베스트 상품 100원 | 적립금 3천원도 바로 드려요!
                    </a>
                    <a href="!#" target="_self" className="visualSl_4">
                        안국건강 회원 전용 혜택 | AGmall 회원을 위한 혜택 총집합 | 안국건강 가족에게만 드리는 기분 좋은 혜택을 만나보세요
                    </a>
                </Slider>
            </section>
        </div>
    )
}

export default Visual
