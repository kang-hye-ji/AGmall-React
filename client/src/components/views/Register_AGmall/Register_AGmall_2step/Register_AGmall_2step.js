import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../../Header/Header'
import {withRouter} from 'react-router-dom'
import './Register_AGmall_2step.css'
import Post from './Sections/Post/Post'
import {
    registerUser, 
    saveUserAgree, 
    saveMemberMsgTarget,
    IdDuplCheck,
    SavePostUserInfo,
    SavePostDetailUserInfo
} from '../../../../_actions/user_action'

function Register_AGmall_2step(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    /* useEffect(() => {
        const variable={
            agreeUsage:'',
            agreePersonal:''
        };
        dispatch(saveUserAgree(variable))
    }, []) */
    /* value */
    const [IdValue, setIdValue] = useState("");
    const [PW, setPW] = useState("")
    const [confirmPW, setconfirmPW] = useState("")
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [PhoneInfoAgree, setPhoneInfoAgree] = useState(false)
    const [EmailBtnValue, setEmailBtnValue] = useState("직접입력")
    const [EmailValue, setEmailValue] = useState("")
    const [EmailInfoAgree, setEmailInfoAgree] = useState(false)
    const [DateBtnValue, setDateBtnValue] = useState("선택")
    const [birthDateValue, setbirthDateValue] = useState("")
    const [maleValue, setmaleValue] = useState(false)
    const [femaleValue, setfemaleValue] = useState(false)
    const [recommenderIdValue, setrecommenderIdValue] = useState("")
    const [yearMemberValue, setyearMemberValue] = useState(false)
    const [lifeMemberValue, setlifeMemberValue] = useState(false)
    /* className */
    const [IdClassName, setIdClassName] = useState("")
    const [PWClassName, setPWClassName] = useState("")
    const [PWAttentionClass, setPWAttentionClass] = useState("")
    const [confirmPWClassName, setconfirmPWClassName] = useState("")
    const [NameClassName, setNameClassName] = useState("")
    const [EmailBtnClassName, setEmailBtnClassName] = useState("")
    const [EmailInputClassName, setEmailInputClassName] = useState("")
    const [PhoneClassName, setPhoneClassName] = useState("")
    const [DateBtnClassName, setDateBtnClassName] = useState("")
    /* etc */
    const [IDDupCheck, setIDDupCheck] = useState(false)
    const [PWState, setPWState] = useState("")
    const [OpenNameWrong, setOpenNameWrong] = useState(false)
    const [OpenEmailSelector, setOpenEmailSelector] = useState(false)
    const [EmailFormRight, setEmailFormRight] = useState(false)
    const [EmailWrongMsg, setEmailWrongMsg] = useState("")
    const [OpenPhoneWrong, setOpenPhoneWrong] = useState(false)
    const [OpenDateSelector, setOpenDateSelector] = useState(false)
    /* 정규식 */
    const notNumOrAlpha=/[^a-z0-9]/gi;
    const notNum=/[^0-9]/g;
    const Num = /[0-9]/g;
    const Alpha=/[a-z]/g;
    const Special=/[~!@#$%";'^,&*()_+|</>=>`?:{[\]\\}]/g;
    const Space=/^\s+|\s+$/g;
    /* 아이디 */
    const IdHandler=(e)=>{
        const curValue=e.currentTarget.value;
        setIDDupCheck(false)
        if(notNumOrAlpha.test(curValue)){
            alert('아이디는 영문 또는 숫자만 입력 가능합니다.')
        }else{
            setIdValue(curValue.replace(notNumOrAlpha,''))
        }

        if(curValue.length>0 && curValue.length<6){
            setIdClassName('wrong');
            e.preventDefault();
        }else if(curValue.length>=6 || curValue.length===0){
            setIdClassName('');
        }
    }
    const idDuplCheck=(e)=>{
        let variableDup={userId:IdValue}
        dispatch(IdDuplCheck(variableDup))
        .then(response=>{
            if(response.payload.uniqueID){
                /* e.preventDefault(); */
                setIDDupCheck(true)
            }else{
                /* e.preventDefault(); */
                setIDDupCheck(false)
                alert('중복된 아이디가 존재합니다. 다른 아이디로 가입해주세요.')
            }
        })
    }
    /* 비밀번호 */
    const PWHandler=(e)=>{
        /* -, . 은 입력하지 마세요. */
        const curValue=e.currentTarget.value;
        setPW(curValue);
        
        const IsNum = curValue.search(Num);
        const IsAlpha = curValue.search(Alpha);
        const IsSpecial=curValue.search(Special);
        const combineConfig=(IsNum>=0 && IsAlpha>=0) || (IsNum>=0 && IsSpecial>=0) || (IsAlpha>=0 && IsSpecial>=0) || (IsNum>=0 && IsSpecial>=0 && IsAlpha>=0);
        const combineDoubleConfig= (IsNum>=0 && IsAlpha>=0 && IsSpecial<0) || (IsNum>=0 && IsSpecial>=0 && IsAlpha<0) || (IsAlpha>=0 && IsSpecial>=0 && IsNum<0);
        //비밀번호 공백
        setPW(curValue.replace(Space, ''));
        if (Space.test(curValue)){
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
        }else if( IsNum>=0 && IsSpecial>=0 && IsAlpha>=0){
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
        const curVal=e.currentTarget.value;
        setname(curVal)
        if(Special.test(curVal) || Num.test(curVal)){
            setOpenNameWrong(true)
            setNameClassName("wrong")
        }else{
            setOpenNameWrong(false)
            setNameClassName("")
        }
    }
    /* 이메일 */
    const emailValidate=(i)=>{
        const AtIndex=i.lastIndexOf("@"); // @ 위치값
        const FromAtString=i.substring(AtIndex+1);  // @를 제외하고 @ 뒤의 문자
        const DotIndex=FromAtString.lastIndexOf('.'); //@ 뒤의 dot의 index
        const FromDotString= FromAtString.substring(DotIndex+1); // @ 뒤의 dot 뒤의 문자
        const ToAtString=i.substring(AtIndex,0) // id 부분 = @ 제외하고 앞의 문자
        if(i===''){
            setEmailInputClassName("")
            setEmailWrongMsg("")
        }else{
            setEmailWrongMsg("이메일을 정확하게 입력해주세요.")
            if(i.search('@')>-1){
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
            emailValidate(EmailValue)
        }else{
            if(EmailValue.search('@')>=0){
                let AtIndex1=EmailValue.lastIndexOf('@');
                let TargetString=EmailValue.substring(AtIndex1);
                setEmailValue(EmailValue.replace(TargetString, `@${curValue}`))
            }else{
                setEmailValue(`${EmailValue}@${curValue}`)
            }
            if(EmailValue==='' || EmailValue.search('@')===0){
                setEmailInputClassName("wrong")
                setEmailFormRight(false)
                setEmailWrongMsg("이메일을 정확하게 입력해주세요.")
            }else{
                setEmailInputClassName("")
                setEmailFormRight(true)
                setEmailWrongMsg("")
            }
        }
    }
    const EmailHandler=(e)=>{
        const curValue=e.currentTarget.value;
        setEmailValue(curValue)
        emailValidate(curValue)
    }
    const EmailInfoOnclick=(e)=>{
        setEmailInfoAgree(!EmailInfoAgree)
    }
    /* 휴대폰 번호 */
    const PhoneHandler=(e)=>{
        const curVal=e.currentTarget.value;
        setphone(curVal)
        if(curVal===''){
            setPhoneClassName("")
            setOpenPhoneWrong(false)
        }else{
            if(notNum.test(curVal) || curVal.search('0')!==0){
                setPhoneClassName("wrong")
                setOpenPhoneWrong(true)
                
            }else{
                setPhoneClassName("")
                setOpenPhoneWrong(false)
            }
        }
    }
    const PhoneInfoOnclick=(e)=>{
        setPhoneInfoAgree(!PhoneInfoAgree)
    }
    /* 성별 */
    const maleHandler=(e)=>{
        setmaleValue(!maleValue)
    }
    const femaleHandler=(e)=>{
        setfemaleValue(!femaleValue)
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
    const birthDateHandler=(e)=>{
        var today=new Date();
        var month=new String(today.getUTCMonth() + 1);
        if(month.length===1){ month="0" + month; }
        var day = new String(today.getDate());
        if(day.length===1){ day="0" + day; }
        var year = today.getFullYear();
        
        let todayDate = year + "-" + month + "-" + day;

        if(e.currentTarget.value>todayDate){
            alert('생일이 현재 날짜보다 크면 안됩니다.')
            e.preventDefault();
        }else{
            setbirthDateValue(e.currentTarget.value)
        }
    }
    /* 멤버 유형 */
    const yearMemberHandler=(e)=>{
        setyearMemberValue(!yearMemberValue)
    }
    const lifeMemberHandler=(e)=>{
        setlifeMemberValue(!lifeMemberValue)
    }
    let gender='';
    if(maleValue){
        gender='male'
    }else if(femaleValue){
        gender='female'
    }

    let memberType='';
    if(yearMemberValue){memberType='yearMember'}
    else if(lifeMemberValue){memberType='lifeMember'}

    const variable={
        userId:IdValue,
        password:PW,
        name:name,
        email:EmailValue,
        emailInfoAgree:EmailInfoAgree,
        phoneNum:phone,
        phoneInfoAgree:PhoneInfoAgree,
        postInfo:user.postInfo,
        postDetailInfo: user.postDetailInfo,
        gender:gender,
        calender:DateBtnValue,
        birthDay:birthDateValue,
        recommenderId:recommenderIdValue,
        memberType:memberType
    }
    const onSubmit=(e)=>{
        if(IdValue==='' ||PW==='' ||name==='' ||EmailValue==='' ||phone==='' ||(maleValue==='' && femaleValue==='') || birthDateValue===''){
            alert('필수 항목을 입력해주세요.')
            e.preventDefault();
        }else if(DateBtnValue==='선택'){
            alert('생일의 양·음력 여부를 입력해주세요.')
            e.preventDefault();
        }else{
            if(!IDDupCheck){
                alert('아이디 중복체크를 해주세요.')
                e.preventDefault();
            }else if(IdClassName==='wrong'){
                alert('아이디를 형식에 맞게 입력하세요.')
                e.preventDefault();
            }else if(PWClassName==='wrong'){
                alert('비밀번호를 형식에 맞게 입력하세요.')
                e.preventDefault();
            }else if(confirmPWClassName==='wrong'){
                alert('비밀번호를 확인해주세요.')
                e.preventDefault();
            }else if(NameClassName==='wrong'){
                alert('이름을 형식에 맞게 입력해 주세요.')
                e.preventDefault();
            }else if(EmailInputClassName==='wrong'){
                alert('이메일을 형식에 맞게 입력하세요.')
                e.preventDefault();
            }else if(PhoneClassName==='wrong'){
                alert('휴대폰 번호를 형식에 맞게 입력하세요.')
                e.preventDefault();
            }else{
                dispatch(registerUser(variable))
                .then(response=>{
                    if(response.payload.success){
                        dispatch(SavePostDetailUserInfo())
                        dispatch(SavePostUserInfo())
                        dispatch(saveUserAgree())
                        dispatch(IdDuplCheck())
                        dispatch(saveMemberMsgTarget(name))
                        props.history.push('/Register_AGmall_3step')
                    }else{
                        alert('회원가입 하는데 실패했습니다.')
                    }
                })
            }
        }
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
                <div className="idDupleChecker">
                    <button type="type" onClick={idDuplCheck}>아이디 중복체크</button>
                    {IDDupCheck
                        ? <p style={{color:'#329cff', fontSize:'13px'}}>※중복되지 않은 아이디입니다.</p>
                        : <p style={{color:'#C70039', fontSize:'15px'}}>※아이디 중복체크를 해주세요.</p>
                    }
                </div>
                
                <form /* onSubmit={onSubmit} */>
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
                                        <input title="아이디" type="text" value={IdValue} onChange={IdHandler} className={IdClassName} />
                                        <p>※휴대전화번호로 아이디 사용가능 합니다.</p>
                                        {IdValue.length>0 && IdValue.length<6 &&
                                            <span className="over6">최소 6자 이상 입력해 주세요.</span>
                                        }
                                        {IdValue.length>=6 &&
                                            <span className="possibleID">올바른 아이디 형식입니다.</span>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>비밀번호</th>
                                    <td>
                                        <input title="비밀번호" type="password" placeholder="영문, 숫자, 특수문자 중 2가지 이상 조합하세요" value={PW} onChange={PWHandler} className={PWClassName} />
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
                                        <input title="비밀번호 확인" type="password" value={confirmPW} onChange={confirmPWHandler} className={confirmPWClassName} />
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
                                        <input title="이름" type="text" value={name} onChange={nameHandler} className={NameClassName} />
                                        {OpenNameWrong &&
                                            <p style={{color:'#444', fontSize:'15px', marginBottom:'12px'}}>이름을 올바른 형식으로 입력해 주세요.</p>
                                        }
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
                                                <input type="checkbox" id="EmailinfoAndEventAgree" value={EmailInfoAgree}/>
                                                <label htmlFor="EmailinfoAndEventAgree" onClick={EmailInfoOnclick}>정보/이벤트 메일 수신에 동의합니다.<br/><span>이메일 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
                                            </li>
                                            <li>
                                                {EmailFormRight 
                                                    ? <p style={{color:'#329cff', fontSize:'15px', marginBottom:'12px'}}>올바른 이메일 형식입니다.</p>
                                                : <p style={{color:'#444', fontSize:'15px', marginBottom:'12px'}}>{EmailWrongMsg}</p>
                                                }
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th><strong>*</strong>휴대폰번호</th>
                                    <td>
                                        <input title="휴대폰번호" type="tel" onChange={PhoneHandler} value={phone} className={PhoneClassName} /><br/>
                                        {OpenPhoneWrong &&
                                            <p style={{fontSize:'15px', color:'#444', marginBottom:'12px'}}>휴대폰 번호를 올바른 형식으로 입력해주세요.</p>
                                        }
                                        <input type="checkbox" id="PhoneinfoAndEventAgree" value={PhoneInfoAgree}/>
                                        <label htmlFor="PhoneinfoAndEventAgree" onClick={PhoneInfoOnclick}>정보/이벤트 메일 수신에 동의합니다.<br/><span>SMS 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
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
                                                <input type="radio" id="male" value={maleValue} name="gender"/>
                                                <label htmlFor="male" onClick={maleHandler}>남자</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="female" value={femaleValue} name="gender"/>
                                                <label htmlFor="female" onClick={femaleHandler}>여자</label>
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
                                        <input title="날짜선택" className="InputOfDateType" type="date" value={birthDateValue} onChange={birthDateHandler}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>추천인 아이디</th>
                                    <td>
                                        <input title="추천인 아이디" type="text" value={recommenderIdValue} onChange={e=>{setrecommenderIdValue(e.currentTarget.value)}}/>
                                        <p><strong>회원가입 시만 기재 가능합니다. *추후 수정 불가</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>휴면회원 방지기간</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <input type="radio" id="1yearMember" value={yearMemberValue} name="membershipType"/>
                                                <label htmlFor="1yearMember" onClick={yearMemberHandler}>1년</label>
                                            </li>
                                            <li>
                                                <input type="radio" id="lifeMember" value={lifeMemberValue} name="membershipType"/>
                                                <label htmlFor="lifeMember" onClick={lifeMemberHandler}>평생회원</label>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>
                <div className="stepBtn">
                    <button type="button" onClick={e=>props.history.push('/register')}>취소</button>
                    <form onSubmit={onSubmit}>
                        <input title="회원가입" type="button" value="회원가입" onClick={onSubmit}/>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default withRouter(Register_AGmall_2step)
