import React, {useState} from 'react'
import Header from '../../Header/Header'
import {withRouter} from 'react-router-dom'
import './Register_AGmall_2step.css'

function Register_AGmall_2step() {
    const [AlphaNum, setAlphaNum] = useState("");
    const [PW, setPW] = useState("")
    const [IdClassName, setIdClassName] = useState("")
    const [PWClassName, setPWClassName] = useState("")
    const [PWAttentionClass, setPWAttentionClass] = useState("")

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
        }else if(curValue.length>=6 || curValue.length==0){
            setIdClassName('');
        }
    }

    const PWHandler=(e)=>{
        const curValue=e.currentTarget.value;
        setPW(curValue);
        
        const Num = /[a-z0-9]/gi;
        const Alpha = /[a-z]/gi;
        const Special=/[~!@#$%";'^,&*()_+|</=>`?:{[\}]/gi;

        if(curValue.length==0){
        }else if(Num.test(curValue) && Alpha.test(curValue)){
        }else if(Num.test(curValue) && Special.test(curValue)){
        }else if(Alpha.test(curValue) && Special.test(curValue)){
        }else if(Num.test(curValue) && Special.test(curValue) && Alpha.test(curValue)){
        }else{
            setPWAttentionClass('combine wrong')
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
                <form>
                    <div className="basic_title">
                        <h2>기본 정보</h2>
                        <p><strong>*</strong> 표시는 반드시 입력하셔야 하는 항목입니다.</p>
                    </div>
                    <fieldset className="basic">
                        <table>
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
                                    {PW.length<8 && PW.length>0 &&
                                        <p>최소 8자 이상 입력하세요.</p>
                                    }
                                    <p className={`combine ${PWAttentionClass}`}>사용 불가합니다! 영문, 숫자, 특수문자 중 2가지 이상 조합하세요.</p>
                                </td>
                            </tr>
                            <tr>
                                <th><strong>*</strong>비밀번호 확인</th>
                                <td>
                                    <input type="password"/>
                                </td>
                            </tr>
                            <tr>
                                <th><strong>*</strong>이름</th>
                                <td>
                                    <input type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <th><strong>*</strong>이메일</th>
                                <td>
                                    <ul>
                                        <li>
                                            <input type="email"/>
                                            <div className="select">
                                                <button type="button"></button>
                                                <ul>
                                                    <li>직접입력</li>
                                                    <li>naver.com</li>
                                                    <li>hanmail.net</li>
                                                    <li>daum.net</li>
                                                    <li>nate.com</li>
                                                    <li>hotmail.com</li>
                                                    <li>gmail.com</li>
                                                    <li>icloud.com</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="infoAndEventAgree"/>
                                            <label htmlFor="infoAndEventAgree">정보/이벤트 메일 수신에 동의합니다.<br/><span>이메일 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
                                        </li>
                                        <li classnmae="checkEmailType">
                                            이메일을 정확하게 입력해주세요.
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th><strong>*</strong>휴대폰번호</th>
                                <td>
                                    <input type="tel"/>
                                    <input type="checkbox" id="infoAndEventAgree"/>
                                    <label htmlFor="infoAndEventAgree">정보/이벤트 메일 수신에 동의합니다.<br/><span>이메일 수신시 1,000원 적립금 즉시 지급됩니다.</span></label>
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
                        </table>
                    </fieldset>
                    <h2>부가 정보</h2>
                    <fieldset className="additional">
                        <table>
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
