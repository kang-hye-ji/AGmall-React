import React, {useState} from 'react'
import Header from '../../Header/Header'
import {withRouter} from 'react-router-dom'
import './Register_AGmall_2step.css'
import Post from './Sections/Post/Post'

function Register_AGmall_2step() {
    /* value */
    const [AlphaNum, setAlphaNum] = useState("");
    const [PW, setPW] = useState("")
    const [confirmPW, setconfirmPW] = useState("")
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [EmailBtnValue, setEmailBtnValue] = useState("직접입력")
    const [EmailValue, setEmailValue] = useState("")
    const [DateBtnValue, setDateBtnValue] = useState("선택")
    /* className */
    const [IdClassName, setIdClassName] = useState("")
    const [PWClassName, setPWClassName] = useState("")
    const [PWAttentionClass, setPWAttentionClass] = useState("")
    const [confirmPWClassName, setconfirmPWClassName] = useState("")
    const [EmailBtnClassName, setEmailBtnClassName] = useState("")
    const [EmailInputClassName, setEmailInputClassName] = useState("")
    const [DateBtnClassName, setDateBtnClassName] = useState("")
    /* etc */
    const [PWState, setPWState] = useState("")
    const [OpenEmailSelector, setOpenEmailSelector] = useState(false)
    const [EmailFormRight, setEmailFormRight] = useState(false)
    const [EmailWrongMsg, setEmailWrongMsg] = useState("")
    const [OpenDateSelector, setOpenDateSelector] = useState(false)

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
        /* -, . 은 입력하지 마세요. */
        const curValue=e.currentTarget.value;
        setPW(curValue);
        
        const Num = curValue.search(/[0-9]/g);
        const Alpha = curValue.search(/[a-z]/g);
        const Special=curValue.search(/[~!@#$%";'^,&*()_+|</>=>`?:{[\]\\}]/g);
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
                if((chr_pass_0 === chr_pass_1) && (chr_pass_1 === chr_pass_2)){
                    SameLetter_0++;
                }
                //연속성(+) 체크
                if(chr_pass_0 - chr_pass_1 === 1 && chr_pass_1 - chr_pass_2 === 1){
                    SameLetter_1++;
                }
                //연속성(-) 체크
                if(chr_pass_0 - chr_pass_1 === -1 && chr_pass_1 - chr_pass_2 === -1){
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
    const EmailHandler=(e)=>{
        const curValue=e.currentTarget.value;
        setEmailValue(curValue)

        const AtIndex=curValue.lastIndexOf("@"); // @ 위치값
        const FromAtString=curValue.substring(AtIndex+1);  // @를 제외하고 @ 뒤의 문자
        const DotIndex=FromAtString.lastIndexOf('.'); //@ 뒤의 dot의 index
        const FromDotString= FromAtString.substring(DotIndex+1); // @ 뒤의 dot 뒤의 문자
        const ToAtString=curValue.substring(AtIndex,0) // id 부분 = @ 제외하고 앞의 문자
        if(curValue===''){
            setEmailInputClassName("")
            setEmailWrongMsg("")
        }else{
            setEmailWrongMsg("이메일을 정확하게 입력해주세요.")
            if(curValue.search('@')>-1){
                if(DotIndex<=0 || FromDotString==='' || ToAtString===''){
                    // @ 뒤에 점이 없는가 or @과 점 사이에 문자열이 없는가
                    // 점 뒤에 문자열이 있는지
                    // @ 앞에 아이디가 있는지
                    setEmailInputClassName("wrong")
                    setEmailFormRight(false)
                }else{
                    setEmailInputClassName("")
                    setEmailFormRight(true)
                }
            }else{
                // @이 없는가
                setEmailInputClassName("wrong")
                setEmailFormRight(false)
            }
        }
    }
    const emailSelectorBtnHandler=(e)=>{
        setOpenEmailSelector(!OpenEmailSelector)
        if(EmailBtnClassName === ""){
            setEmailBtnClassName("arrowUp")
        }else{
            setEmailBtnClassName("")
        }
    }
    const emailOptionClickHandler=(e)=>{
        const curValue=e.currentTarget.value;
        if(curValue === '직접입력'){
            setEmailBtnValue('직접입력')
            if(EmailValue.search('@')<0){
                setEmailValue(`${EmailValue}@`)
            }
        }else{
            setEmailBtnValue(`@ ${curValue}`)
            if(EmailValue.search('@')>=0){
                let AtIndex=EmailValue.lastIndexOf('@');
                let TargetString=EmailValue.substring(AtIndex+1);
                setEmailValue(EmailValue.replace(TargetString, curValue))
            }else{
                setEmailValue(`${EmailValue}@${curValue}`)
            }
        }
    }
    /* 휴대폰 번호 */
    const PhoneHandler=(e)=>{
        setphone(e.currentTarget.value)
    }
    /* 날짜 */
    const DateSelectorBtnHandler=()=>{
        setOpenDateSelector(!OpenDateSelector)
        if(DateBtnClassName === ""){
            setDateBtnClassName("arrowUp")
        }else{
            setDateBtnClassName("")
        }
    }
    const dateOptionClickHandler=(e)=>{
        const curValue=e.currentTarget.value;
        setDateBtnValue(curValue)
    }
    /* radio 선택 기능 / 취소버튼 */
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
                            <caption>기본 정보</caption>
                            <tbody>
                                <tr>
                                    <th><strong>*</strong>아이디</th>
                                    <td>
                                        <input title="아이디" type="text" value={AlphaNum} onChange={IdHandler} className={IdClassName}/>
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
                                        <input title="비밀번호" type="password" placeholder="영문, 숫자, 특수문자 중 2가지 이상 조합하세요" value={PW} onChange={PWHandler} className={PWClassName}/>
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
                                        <input title="비밀번호 확인" type="password" value={confirmPW} onChange={confirmPWHandler} className={confirmPWClassName}/>
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
                                        <input title="이름" type="text" value={name} onChange={nameHandler}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>이메일</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <input value={EmailValue} onChange={EmailHandler} title="이메일" type="email" className={EmailInputClassName}/>
                                                <div className="select">
                                                    <input title="이메일주소" type="button" value={EmailBtnValue} className={EmailBtnClassName} onClick={emailSelectorBtnHandler}/>
                                                    {OpenEmailSelector &&
                                                        <ol onClick={emailSelectorBtnHandler}>
                                                            <li><input title="이메일주소 직접입력" type="button" value="직접입력" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="네이버 이메일주소" type="button" value="naver.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="한메일 이메일주소" type="button" value="hanmail.net" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="다음 이메일주소" type="button" value="daum.net" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="네이트 이메일주소" type="button" value="nate.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="핫메일 이메일주소" type="button" value="hotmail.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="쥐메일 이메일주소" type="button" value="gmail.com" onClick={emailOptionClickHandler}/></li>
                                                            <li><input title="아이클라우드 이메일주소" type="button" value="icloud.com" onClick={emailOptionClickHandler}/></li>
                                                        </ol>
                                                    }
                                                </div>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="EmailinfoAndEventAgree"/>
                                                <label htmlFor="EmailinfoAndEventAgree">정보/이벤트 메일 수신에 동의합니다.<br/><span>이메일 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
                                            </li>
                                            <li>
                                                {EmailFormRight 
                                                    ? <p style={{color:'#329cff', fontSize:'15px', marginBottom:'12px'}}>사용 가능한 이메일입니다.</p>
                                                : <p style={{color:'#444', fontSize:'15px', marginBottom:'12px'}}>{EmailWrongMsg}</p>
                                                }
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>휴대폰번호</th>
                                    <td>
                                        <input title="휴대폰번호" type="tel" onChange={PhoneHandler} value={phone}/><br/>
                                        <input type="checkbox" id="PhoneinfoAndEventAgree"/>
                                        <label htmlFor="PhoneinfoAndEventAgree">정보/이벤트 메일 수신에 동의합니다.<br/><span>SMS 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>주소</th>
                                    <td>
                                        <Post/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                    <h2 className="additional_title">부가 정보</h2>
                    <fieldset className="additional">
                        <table>
                            <caption>부가 정보</caption>
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
                                        <div className="DateSelect">
                                            <input title="양·음력" type="button" value={DateBtnValue} className={DateBtnClassName} onClick={DateSelectorBtnHandler}/>
                                            {OpenDateSelector &&
                                                <ol onClick={DateSelectorBtnHandler}>
                                                    <li><input title="선택" type="button" value="선택" onClick={dateOptionClickHandler}/></li>
                                                    <li><input title="양력" type="button" value="양력" onClick={dateOptionClickHandler}/></li>
                                                    <li><input title="음력" type="button" value="음력" onClick={dateOptionClickHandler}/></li>
                                                </ol>
                                            }
                                        </div>
                                        <input title="날짜선택" className="InputOfDateType" type="date"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>추천인 아이디</th>
                                    <td>
                                        <input title="추천인 아이디" type="text"/>
                                        <p><strong>회원가입 시만 기재 가능합니다. *추후 수정 불가</strong></p>
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
                    <button type="button">취소</button>
                    <form>
                        <input title="회원가입" type="submit" value="회원가입"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register_AGmall_2step)
