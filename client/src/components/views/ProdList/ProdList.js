import React, {useEffect} from 'react'

function ProdList(props) {
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
    return (
        <div className="ProdListCont">
            <div className="ProdListCont_box">
                <a href={`/prod/${props.product._id}`} target="_self" className="productImg">
                    {props.product.discount &&
                        <span className="discount">{`${props.product.discount}%`}</span>
                    }
                    <img src={props.product.filePath} alt="상품"/>
                    <div>
                        <button type="button"><img alt="장바구니" src="/img/main/best_ico1.png"/></button>
                        <button type="button"><img alt="찜하기" src="/img/main/best_ico2.png"/></button>
                    </div>
                </a>
                <a href="!#" target="_self" className="productName" title={props.product.name}>
                    <h3>{props.product.name}</h3>
                </a>
            </div>
            {props.product.fixedPrice 
                ? <span><del>{`${comma(props.product.fixedPrice)}원`}</del>{`${comma(props.product.sellingPrice)}원`}</span>
                : <span>{`${comma(props.product.sellingPrice)}원`}</span>
            }
        </div>
    )
}

export default ProdList
