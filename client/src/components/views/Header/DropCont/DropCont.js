import React from 'react'
import $ from "jquery";
import './DropCont.css'

function DropCont() {
    $(document).ready(function(){
        $('.dropContBt').on('click',function(){
            $(this).parent().parent().slideUp(200);
        })
    })
    return (
        <div>
            <div className="dropCont">
                <div className="dropContInner">
                    안국건강 가입하면 베스트 상품 100원 자세히 보기
                    <button type="button" className="dropContBt">
                        <img src="/img/layout/dropCont_closeBt.png" alt="닫기버튼"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DropCont
