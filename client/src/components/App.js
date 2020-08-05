import React, { Suspense } from "react";
import {
  BrowserRouter as Switch, Route
} from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Register_AGmall from "./views/Register_AGmall/Register_AGmall";
import UsageTerms from "./views/Register_AGmall/TermsAllView/UsageTerms";
import PersonalTerms from "./views/Register_AGmall/TermsAllView/PersonalTerms";
import Register_AGmall_2step from "./views/Register_AGmall/Register_AGmall_2step/Register_AGmall_2step";
import Register_AGmall_3step from "./views/Register_AGmall/Register_AGmall_3step/Register_AGmall_3step";
import LoginPage from "./views/LoginPage/LoginPage";
import MyPage from "./views/MyPage/MyPage";
import Footer from "./views/Footer/Footer"
import TopAndBottomBtn from "./functions/TopAndBottomBtn/TopAndBottomBtn"
import QuickSide from "./functions/QuickSide/QuickSide"
import {Register_AG_2_restrict, Register_AG_3_restrict} from '../hoc/routeConnRestrict'
import auth from '../hoc/auth'

function App() {
  return (
    <Suspense fallback={(<div style={{fontSize:"20px", textAlign:'center', paddingTop:'80px'}}>loading...</div>)}>
        <div style={{minWidth:"1200px", margin:"0 auto", overflow:"auto"}}>
          <TopAndBottomBtn/>
          <QuickSide/>
          <Switch>
            <Route exact path="/" component={auth(LandingPage)}/>
            <Route exact path="/register" component={auth(RegisterPage, false)}/>
            <Route exact path="/register_agmall" component={auth(Register_AGmall, false)}/>
            <Route exact path="/usageterms" component={auth(UsageTerms, false)}/>
            <Route exact path="/personalterms" component={auth(PersonalTerms, false)}/>
            <Route exact path="/Register_AGmall_2step" component={auth(Register_AG_2_restrict(Register_AGmall_2step), false)}/>
            <Route exact path="/Register_AGmall_3step" component={auth(Register_AG_3_restrict(Register_AGmall_3step), false)}/>
            <Route exact path="/login" component={auth(LoginPage, false)}/>
            <Route exact path="/mypage" component={MyPage}/>
          </Switch>
          <Footer/>
        </div>
    </Suspense>
  );
}

export default App;