import React, {useEffect, useState} from 'react'
import Header from '../../Header/Header'
import ProdList from '../../ProdList/ProdList'
import Axios from 'axios'
import { Pagination } from 'antd';

function VitaProdPage() {
    const [OpenSelector, setOpenSelector] = useState(false)
    const [rangeSetBtnClassName, setrangeSetBtnClassName] = useState()
    const [rangeSetValue, setrangeSetValue] = useState("4개씩보기")
    const [Products, setProducts] = useState([])
    const [loading, setloading] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)
    const [productsPerPage, setproductsPerPage] = useState(40)
    
    useEffect(() => {
        setloading(true);
        let body={category:'비타민'}
        Axios.post('https://agmall.herokuapp.com/api/product/lists', body)
        .then(response=>{
            if(response.data.success){
                setProducts(response.data.products)
                setloading(false)
            }
        })
    }, [])

    const rangeOptions=[
        {value:"1개씩보기"},
        {value:"2개씩보기"},
        {value:"3개씩보기"},
        {value:"4개씩보기"}
    ]
    const rangeSetBtnHandler=(e)=>{
        setOpenSelector(!OpenSelector)
        if(rangeSetBtnClassName === "arrowUp"){
            setrangeSetBtnClassName("")
        }else{
            setrangeSetBtnClassName("arrowUp")
        }
    }
    console.log(rangeSetBtnClassName)
    const rangeOptionHandler=(e)=>{
        let curVal=e.currentTarget.value;
        setrangeSetValue(curVal)
        if(curVal==="4개씩보기"){
            setproductsPerPage(4)
        }else if(curVal==="3개씩보기"){
            setproductsPerPage(3)
        }else if(curVal==="2개씩보기"){
            setproductsPerPage(2)
        }else if(curVal==="1개씩보기"){
            setproductsPerPage(1)
        }
    }

    //Get Current Products
    const indexOfLastProduct = currentPage*productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct-productsPerPage;
    const currentProduct=Products.slice(indexOfFirstProduct, indexOfLastProduct)

    const productBox=currentProduct.map((product, index)=>{
        return(
            <ProdList product={product} loading={loading} />
        )
    })
    return (
        <div>
            <Header/>
            <div className="ProdPageWrap">
                <div className="banner">
                    <img src="/img/productBanner/list_3_pc_105938.jpg" alt="자연에 가까운 건강한 원료를 담은 비타민, 안심하고 섭취하세요."/>
                </div>
                <div className="prodTopBar">
                    <p>상품 <span>{Products.length}</span>개</p>
                    <ul>
                        <li>
                            {/* <a>1</a> */}
                        </li>
                        <li>
                        <input title="보기설정" type="button" value={rangeSetValue} className={rangeSetBtnClassName} onClick={rangeSetBtnHandler}/>
                        {OpenSelector &&
                            <ol onClick={rangeSetBtnHandler} className="rangeSelect">
                                {rangeOptions.map((item, index)=>(
                                    <li><input title={item.value} type="button" value={item.value} onClick={rangeOptionHandler}/></li>
                                ))}
                            </ol>
                        }
                        </li>
                    </ul>
                </div>
                {loading ? (
                    <div style={{width:'100%', textAlign:'center', fontSize:'30px', fontWeight:'600', padding:'50px 0'}}>Loading...</div>
                )
                : (
                    <div className="prodList">
                        {productBox}
                    </div>
                )}
                <Pagination onChange={(page)=>{setcurrentPage(page)}} defaultCurrent={1} total={Products.length} pageSize={productsPerPage}/>
            </div>
        </div>
    )
}

export default VitaProdPage
