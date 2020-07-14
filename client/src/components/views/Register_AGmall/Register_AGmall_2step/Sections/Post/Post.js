import React, { useState } from 'react'
import './Post.css'
import DaumPostcode from 'react-daum-postcode';
import {AnimateOnChange} from 'react-animation'


function Post() {
    const [postNum, setpostNum] = useState("")
    const [address, setaddress] = useState("")
    const [detailedAddress, setdetailedAddress] = useState("")
    const [openPostLayer, setopenPostLayer] = useState(false)
    
    const handleComplete = (data) => {
        setopenPostLayer(!openPostLayer)
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setpostNum(data.zonecode);
        setaddress(fullAddress);
    }
    const detailAddress=(e)=>{
        setdetailedAddress(e.currentTarget.value)
    }
    return (
        <div className="Register_AG_2_POST">
            <AnimateOnChange durationOut="200">
                {openPostLayer &&
                    <React.Fragment>
                        <div id="PostLayer">
                            <button type="button" title="닫기" onClick={e=>setopenPostLayer(!openPostLayer)}>x</button>
                            <DaumPostcode 
                                onComplete={handleComplete}
                                autoClose={true}
                                animation={true}
                                style={{width:'541px', position:'absolute', bottom:'2px', left:'2px'}}
                            />
                        </div>
                        <div className="PostLayerDimm" onClick={e=>setopenPostLayer(false)}></div>
                    </React.Fragment>
                }
            </AnimateOnChange>
            <input title="우편번호" type="text" className="postNum" value={postNum} readOnly  required/>
            <form type="submit">
                <input onClick={e=>{setopenPostLayer(!openPostLayer)}} title="우편번호 검색" type="button" value="우편번호 검색" className="postSchBtn"/>
            </form>
            <br/><input title="주소" type="text" className="address" value={address} readOnly required/><br/>
            <input title="상세주소" placholder="상세주소" type="text" className="detailedAddress" value={detailedAddress} onChange={detailAddress}/>
        </div>
    )
}

export default Post
