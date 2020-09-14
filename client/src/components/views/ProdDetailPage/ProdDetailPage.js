import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import './ProdDetailPage.css'

function ProdDetailPage(props) {
    const [Products, setProducts] = useState([]);
    const [number, setnumber] = useState(1)
    useEffect(() => {
        const prodId=props.match.params.prodId;
        let body={prodId:prodId}
        axios.post('https://agmall.herokuapp.com/api/product/prodDetail', body)
        .then(response=>{
            if(response.data.success){
                setProducts(response.data.products)
            }
        })
    }, [])
    
    const productInfo=Products.map((product, index)=>{
        const comma = (num)=>{
            var len, point, str;
            num=num + "";
            point=num.length%3;
            len=num.length;
            str=num.substring(0,point);
            while(point<len){
                if(str!="") str+=",";
                str+=num.substring(point,point+3);
                point +=3;
            }
            return str;
        }

        const productNumber=(e)=>{
            setnumber(e.currentTarget.value);
            if(Number(number)<0){
                alert('0이상만 입력 가능합니다.')
                setnumber(0)
            }else if(isNaN(number)){
                alert('숫자만 입력 가능합니다.')
                setnumber(0)
            }
        }
        const upBtnClick=()=>{
            setnumber(Number(number)+1)
            if(Number(number)<0){
                alert('0이상만 입력 가능합니다.')
                setnumber(0)
            }else if(isNaN(number)){
                alert('숫자만 입력 가능합니다.')
                setnumber(0)
            }
        }
        const downBtnClick=()=>{
            setnumber(number-1)
            if(Number(number)<0){
                alert('0이상만 입력 가능합니다.')
                setnumber(0)
            }else if(isNaN(number)){
                alert('숫자만 입력 가능합니다.')
                setnumber(0)
            }
        }
        return(
            <div>
                <div className="prod_img">
                    <img src={product.filePath} alt="상품이미지"/>
                </div>
                <div className="prod_right">
                    <ul className="prod_info">
                        <li className="prod_tit">{product.name}</li>
                        <li className="prod_priceInfo">
                            <ol>
                                {product.fixedPrice &&
                                    <li className="fixedPrice">
                                        <dl>
                                            <dt>정가</dt>
                                            <dd><del>{`${comma(product.fixedPrice)}원`}</del></dd>
                                        </dl>
                                    </li>
                                }
                                <li className="sellingPrice">
                                    <dl>
                                        <dt>판매가</dt>
                                        <dd><span>{comma(product.sellingPrice)}</span>원</dd>
                                    </dl>
                                </li>
                                <li className="deliveryCharge">
                                    <dl>
                                        <dt>배송비</dt>
                                        <dd>
                                            {`${comma(product.deliveryCharge)}원`}
                                            {product.deliveryCharge>0 &&
                                                <span>(30,000원 이상 구매 시 무료)</span>
                                            }
                                        </dd>
                                    </dl>
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <ol className="prod_option">
                        <li className="prod_option-production">
                            <ul>
                                <li>{product.name}</li>
                                <li>
                                    <input type="text" value={number} onChange={productNumber}/>
                                    <div className="button">
                                        <button className="upBtn" onClick={upBtnClick}><img alt="증가" src="/img/count-up.png"/></button>
                                        <button className="downBtn" onClick={downBtnClick}><img alt="감소" src="/img/count-down.png"/></button>
                                    </div>
                                </li>
                                <li>{`${comma(product.sellingPrice*number)}원`}</li>
                            </ul>
                        </li>
                    </ol>
                    <div className="totalPrice">
                        <dl>
                            <dt>총 상품금액</dt>
                            <dd><span>{comma(product.sellingPrice*number)}</span>원</dd>
                        </dl>
                    </div>
                    <ul className="prod_func">
                        <li>
                            <button type="button">장바구니</button>
                        </li>
                        <li>
                            <button type="button">찜하기</button>
                        </li>
                        <li>
                            <button type="button">구매하기</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div>
            <Header/>
            <div style={{padding:'100px 0'}}>
                <div className="prodDetailWrap">
                    <div className="prodDetailWrapInner">
                        {productInfo}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdDetailPage
