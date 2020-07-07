import React, {useState} from 'react'
import Header from '../../Header/Header'
import {withRouter} from 'react-router-dom'
import './Register_AGmall_2step.css'

function Register_AGmall_2step() {
    /* value */
    const [AlphaNum, setAlphaNum] = useState("");
    const [PW, setPW] = useState("")
    const [confirmPW, setconfirmPW] = useState("")
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [EmailBtnValue, setEmailBtnValue] = useState("직접입력")
    /* className */
    const [IdClassName, setIdClassName] = useState("")
    const [PWClassName, setPWClassName] = useState("")
    const [PWAttentionClass, setPWAttentionClass] = useState("")
    const [confirmPWClassName, setconfirmPWClassName] = useState("")
    const [EmailBtnClassName, setEmailBtnClassName] = useState("")
    /* etc */
    const [PWState, setPWState] = useState("")
    const [OpenEmailSelector, setOpenEmailSelector] = useState(false)

    /* 아이디 */
    const IdHandler=(e)=>{
        const curValue=e.currentTarget.value;
        const notNum=/[^a-z0-9]/gi;
        
        if(notNum.test(curValue)){
            alert('아이디는 영문 또는 숫자만 입력 가능합니다.')
        }else{
            setAlphaNum(curValue.replace(notNum,''))
        }

        if(curValue.length>0 && curValue.length<6){
            setIdClassName('wrong');
            e.preventDefault();
        }else if(curValue.length>=6 || curValue.length===0){
            setIdClassName('');
        }
    }
    /* 비밀번호 */
    const PWHandler=(e)=>{
        /* -, ], . 은 입력하지 마세요. */
        const curValue=e.currentTarget.value;
        setPW(curValue);
        
        const Num = curValue.search(/[0-9]/g);
        const Alpha = curValue.search(/[a-z]/g);
        const Special=curValue.search(/[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g);
        const space=/^\s+|\s+$/g;
        const combineConfig=(Num>=0 && Alpha>=0) || (Num>=0 && Special>=0) || (Alpha>=0 && Special>=0) || (Num>=0 && Special>=0 && Alpha>=0);
        const combineDoubleConfig= (Num>=0 && Alpha>=0 && Special<0) || (Num>=0 && Special>=0 && Alpha<0) || (Alpha>=0 && Special>=0 && Num<0);
        //비밀번호 공백
        setPW(curValue.replace(space, ''));
        if (space.test(curValue)){
            alert('비밀번호는 공백 없이 입력해주세요.')
        }
        
        //안전도 체크
        let SameLetter_0=0;
        let SameLetter_1=0;
        let SameLetter_2=0;
        for(var i=0; i<curValue.length; i++){
            var chr_pass_0;
            var chr_pass_1;
            var chr_pass_2;
            if(i>=2){
                chr_pass_0=curValue.charCodeAt(i-2);
                chr_pass_1=curValue.charCodeAt(i-1);
                chr_pass_2=curValue.charCodeAt(i);
                //동일 문자 체크
                if((chr_pass_0 ==chr_pass_1) && (chr_pass_1 == chr_pass_2)){
                    SameLetter_0++;
                }
                //연속성(+) 체크
                if(chr_pass_0 - chr_pass_1 == 1 && chr_pass_1 - chr_pass_2 == 1){
                    SameLetter_1++;
                }
                //연속성(-) 체크
                if(chr_pass_0 - chr_pass_1 == -1 && chr_pass_1 - chr_pass_2 == -1){
                    SameLetter_2++;
                }
            }
        }
        const NotSafeConfig=SameLetter_0>0 || SameLetter_1>0 || SameLetter_2>0;
        
        //안전도 여부
        if(combineDoubleConfig){
            if(NotSafeConfig){
                setPWState('안전도 낮음 | 예측하기 쉬운 비밀번호입니다.')
            }else if(!NotSafeConfig){
                setPWState('안전도 보통 | 안전한 비밀번호 입니다.')
            }
        }else if( Num>=0 && Special>=0 && Alpha>=0){
            if(NotSafeConfig){
                setPWState('안전도 보통 | 안전한 비밀번호 입니다.')
            }else if(!NotSafeConfig){
                setPWState('안전도 높음 | 예측하기 어려운 비밀번호 입니다.')
            }
        }else{
            setPWState('')
        }
        //2가지 조합 메세지, input 빨간테두리 여부
        if(curValue.length===0 || combineConfig){
            setPWAttentionClass('')  // 2가지 이상 조합하세요 메세지 여부
            setPWClassName('')  // input 빨간박스 여부
        }else{
            setPWAttentionClass('wrong')
            setPWClassName('wrong')
        }
        //자릿수와 input 빨간테두리 여부
        if((curValue.length<8 && curValue.length>0) || curValue.length>16){
            setPWClassName('wrong')
        }
    }
    /* 비밀번호 확인 */
    const confirmPWHandler=(e)=>{
        const curValue=e.currentTarget.value;
        setconfirmPW(curValue);
        if(curValue!==PW && curValue.length>0){
            setconfirmPWClassName("wrong")
        }else{
            setconfirmPWClassName("")
        }
    }
    /* 이름 */
    const nameHandler=(e)=>{
        setname(e.currentTarget.value)
    }
    /* 이메일 */
    const emailSelectorBtnHandler=(e)=>{
        setOpenEmailSelector(!OpenEmailSelector)
        if(EmailBtnClassName === ""){
            setEmailBtnClassName("arrowUp")
        }else{
            setEmailBtnClassName("")
        }
    }
    const emailSelectorClickHandler=(e)=>{
        setOpenEmailSelector(!OpenEmailSelector)
        if(EmailBtnClassName === ""){
            setEmailBtnClassName("arrowUp")
        }else{
            setEmailBtnClassName("")
        }
    }
    const emailOptionClickHandler=(e)=>{
        setEmailBtnValue(`@ ${e.currentTarget.value}`)
    }
    /* 휴대폰 번호 */
    const PhoneHandler=(e)=>{
        setphone(e.currentTarget.value)
    }
    return(
        <div>
            <Header/>
            <div className="register_ag_2step_wrap">
                <div className="top">
                    <h1>회원가입</h1>
                    <ol>
                        <li>01 약관동의</li>
                        <li>02 정보입력</li>
                        <li>03 가입완료</li>
                    </ol>
                </div>
                <form>
                    <div className="basic_title">
                        <h2>기본 정보</h2>
                        <p><strong>*</strong> 표시는 반드시 입력하셔야 하는 항목입니다.</p>
                    </div>
                    <fieldset className="basic">
                        <table>
                            <tbody>
                                <tr>
                                    <th><strong>*</strong>아이디</th>
                                    <td>
                                        <input type="text" value={AlphaNum} onChange={IdHandler} className={IdClassName}/>
                                        <p>※휴대전화번호로 아이디 사용가능 합니다.</p>
                                        {AlphaNum.length>0 && AlphaNum.length<6 &&
                                            <span className="over6">최소 6자 이상 입력해 주세요.</span>
                                        }
                                        {AlphaNum.length>=6 &&
                                            <span className="possibleID">사용 가능한 아이디입니다.</span>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>비밀번호</th>
                                    <td>
                                        <input type="password" placeholder="영문, 숫자, 특수문자 중 2가지 이상 조합하세요" value={PW} onChange={PWHandler} className={PWClassName}/>
                                        {PW.length>7 && PW.length<17 &&
                                            <p style={{color:'#329cff'}}>{PWState}</p>
                                        }   
                                        {PW.length<8 && PW.length>0 &&
                                            <p>최소 8자 이상 입력하세요.</p>
                                        }
                                        {PW.length>16 &&
                                            <p>최대 16자 이하로 입력하세요.</p>
                                        }
                                        {PW.length>=8 && PW.length<17 &&
                                            <p className={`combine ${PWAttentionClass}`}>사용 불가합니다! 영문, 숫자, 특수문자 중 2가지 이상 조합하세요.</p>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>비밀번호 확인</th>
                                    <td>
                                        <input type="password" value={confirmPW} onChange={confirmPWHandler} className={confirmPWClassName}/>
                                        { PW!==confirmPW &&
                                        confirmPW.length>0 &&
                                            <p style={{marginBottom:'12px', fontSize:'15px', color:'#444'}}>비밀번호가 서로 다릅니다.</p>
                                        }
                                        { PW===confirmPW &&
                                        confirmPW.length>0 &&
                                            <p style={{marginBottom:'12px', fontSize:'15px', color:'#329cff'}}>비밀번호가 일치합니다.</p>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>이름</th>
                                    <td>
                                        <input type="text" value={name} onChange={nameHandler}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>이메일</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <input type="email"/>
                                                <div className="select">
                                                    <input type="button" value={EmailBtnValue} className={EmailBtnClassName} onClick={emailSelectorBtnHandler}/>
                                                    {OpenEmailSelector &&
                                                        <ul onClick={emailSelectorClickHandler}>
                                                            <li><input type="button" value="직접입력" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="naver.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="hanmail.net" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="daum.net" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="nate.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="hotmail.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="gmail.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input type="button" value="icloud.com" onClick={emailOptionClickHandler}/></li>
                                                        </ul>
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="EmailinfoAndEventAgree"/>
                                                <label htmlFor="EmailinfoAndEventAgree">정보/이벤트 메일 수신에 동의합니다.<br/><span>이메일 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
                                            </li>
                                            <li classnmae="checkEmailType" style={{display:'none'}}>
                                                이메일을 정확하게 입력해주세요.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>휴대폰번호</th>
                                    <td>
                                        <input type="tel" onChange={PhoneHandler} value={phone}/>
                                        <input type="checkbox" id="PhoneinfoAndEventAgree"/>
                                        <label htmlFor="PhoneinfoAndEventAgree">정보/이벤트 메일 수신에 동의합니다.<br/><span>SMS 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>주소</th>
                                    <td>
                                        <input type="text"/>
                                        <button>우편번호검색</button>
                                        <input type="text"/>
                                        <input type="text"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                    <h2>부가 정보</h2>
                    <fieldset className="additional">
                        <table>
                            <tbody>

                                <tr>
                                    <th><strong>*</strong>성별</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <input type="radio" id="male"/>
                                                <label htmlFor="male">남자</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="female"/>
                                                <label htmlFor="female">여자</label>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>생일</th>
                                    <td>
                                        <select>
                                            <optgroup>
                                                <option value="opt">선택</option>
                                                <option value="solar">양력</option>
                                                <option value="lunar">음력</option>
                                            </optgroup>
                                        </select>
                                        <input type="date"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>추천인 아이디</th>
                                    <td>
                                        <input type="text"/>
                                        <p>회원가입 시만 기재 가능합니다. *추후 수정 불가</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>휴면회원 방지기간</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <input type="radio" id="1yearMember"/>
                                                <label htmlFor="1yearMember">1년</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="lifeMember"/>
                                                <label htmlFor="lifeMember">평생회원</label>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>
                <div className="stepBtn">
                    <button type="button">이전단계</button>
                    <form>
                        <input type="submit" value="다음단계"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register_AGmall_2step)
