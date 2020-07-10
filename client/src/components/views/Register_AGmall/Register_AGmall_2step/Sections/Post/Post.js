import React, { useState } from 'react'
import './Post.css'
import DaumPostcode from 'react-daum-postcode';
/* import {Fade} from 'react-fade' */
/* import FadeIn from 'react-fade-in'; */
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

        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setpostNum(data.zonecode);
        setaddress(fullAddress);
    }
    /* extra address 처리 */
    return (
        <div className="Register_AG_2_POST">
            <AnimateOnChange durationOut="200">
                {openPostLayer &&
                    <React.Fragment>
                        <div id="PostLayer" style={{/* background:'#222', width:'545px', height:'424px', position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)', zIndex:'2000' */}}>
                            <button type="button" title="닫기버튼" onClick={e=>setopenPostLayer(!openPostLayer)}>x</button>
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
            <input title="우편번호" type="text" className="postNum" value={postNum}/>
            <form type="submit">
                <input onClick={e=>{setopenPostLayer(!openPostLayer)}} title="우편번호 검색" type="button" value="우편번호 검색" className="postSchBtn"/>
            </form>
            <br/><input title="주소" type="text" className="address" value={address}/><br/>
            <input title="상세주소" placholder="상세주소" type="text" className="detailedAddress" value={detailedAddress}/>
        </div>
    )
}

export default Post
