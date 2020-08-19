import React from 'react'
import Header from '../../Header/Header'
import './BeautyProdPage.css'

function BeautyProdPage() {
    return (
        <div>
            <Header/>
            <div className="ProdPageWrap">
                <div className="banner">
                    <img src="/img/productBanner/list_2_pc_105924.jpg" alt="인생뷰티 | 촉촉, 탱탱, 생기, 나에게 필요한 인생뷰티를 선택해보세요 | 안국건강 인생뷰티모델 배우 엄지원"/>
                </div>
                <div className="prodTopBar">
                    <p>상품 <span>12</span>개</p>
                    <ul>
                        <li>
                            <a>1</a>
                        </li>
                        <li>
                            <a>2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BeautyProdPage
