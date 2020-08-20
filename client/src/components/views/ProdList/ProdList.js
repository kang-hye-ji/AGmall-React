import React from 'react'

function ProdList(props) {
    return (
        <div className="ProdListCont">
            <div className="ProdListCont_box">
                <a href="!#" target="_self" className="productImg">
                    <img src={props.product.filePath} alt="상품"/>
                    {/* <img src='http://localhost:5000/Product/images/Beauty/1000000392_detail_054.jpg' alt="상품"/> */}
                    <div>
                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                    </div>
                </a>
                <a href="!#" target="_self" className="productName">
                    <h3>{props.product.name}</h3>
                </a>
            </div>
            <span>{`${props.product.sellingPrice}원`}</span>
        </div>
    )
}

export default ProdList
