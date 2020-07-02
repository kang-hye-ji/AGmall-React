import React from 'react'
import Header from '../../Header/Header'

function PersonalTerms() {
    return (
        <div>
            <Header/>
            <div style={{width:'1200px', margin:'0 auto', padding:'50px 10px'}}>
                <h2 style={{fontSize:'22px'}}>개인정보 수집 및 이용</h2>
                <hr style={{margin:'30px 0'}}/>
                <div style={{fontSize:'13px', color:'#717171', lineHeight:'20px'}}>
                    1. - 목적 : 이용자 식별 및 본인여부 확인
                    <br/>- 항목 : 이름, 아이디, 비밀번호
                    <br/>- 보유 및 이용기간 : 회원탈퇴 후 5일까지
                    <br/><br/>
                    2. - 목적 : 민원 등 고객 고충처리
                    <br/>- 항목 : 이메일, 휴대전화번호
                    <br/>- 보유 및 이용기간 : 회원탈퇴 후 5일까지
                    <br/><br/>
                    3. - 목적 : 만 14세 미만 아동 확인
                    <br/>- 항목 : 법정 생년월일
                    <br/>- 보유 및 이용기간 : 회원탈퇴 후 5일까지
                    <br/><br/>
                    4. - 목적 : 할인쿠폰, 이벤트, SMS, TM(텔레마케팅)
                    <br/>- 항목 : 이메일, 핸드폰번호 (수신동의 시 발송)
                    <br/>- 보유 및 이용기간 : 회원탈퇴 후 5일까지
                </div>
            </div>
        </div>
    )
}

export default PersonalTerms
