import React, {useEffect} from 'react'
import './TopAndBottomBtn.css'
import jQuery from "jquery";
import './TopAndBottomBtnJquery'

function TopAndBottomBtn() {
    useEffect(() => {
        window.$ = window.jQuery = jQuery;
    }, [])
    return (
        <div>
            <div className="topNbottom">
                <div className="topNbottomInner">
                    <button type="button" className="tb_btn1"><img src="/img/layout/btn_coursetop.png" alt="최상단으로"/></button>
                    <button type="button" className="tb_btn2"><img src="/img/layout/btn_coursebottom.png" alt="최하단으로"/></button>
                </div>
            </div>
        </div>
    )
}

export default TopAndBottomBtn
