import React from 'react'
import './QuickSide.css'

function QuickSide() {
    return (
        <div>
            <div className="quickSide">
                <div className="quickSideInner">
                    <div className="quickWrap">
                        <a href="!#" target="_blank" title="카카오톡 친구이벤트 새창열기">
                            <img src="/img/layout/quickSide1.jpg" alt="카톡친구 맺으면 3,000원 지급"/>
                            <img src="/img/layout/quickSide2.jpg" alt="2020년 4월 할인쿠폰"/>
                        </a>
                        <ul className="sns">
                            <li><a href="!#" title="카카오톡 새창열기" target="_blank"><img alt="카카오톡" src="/img/layout/sns_ico3.png"/></a></li>
                            <li><a href="!#" title="네이버포스트 새창열기" target="_blank"><img alt="네이버포스트" src="/img/layout/sns_ico1.png"/></a></li>
                            <li><a href="!#" title="인스타그램 새창열기" target="_blank"><img alt="인스타그램" src="/img/layout/sns_ico4.png"/></a></li>
                            <li><a href="!#" title="페이스북 새창열기" target="_blank"><img alt="페이스북" src="/img/layout/sns_ico2.png"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickSide
