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
import Footer from "./views/Footer/Footer"
import TopAndBottomBtn from "./functions/TopAndBottomBtn/TopAndBottomBtn"
import QuickSide from "./functions/QuickSide/QuickSide"
import {Register_AG_2_restrict, Register_AG_3_restrict} from '../hoc/routeConnRestrict'

function App() {
  return (
    <Suspense fallback={(<div style={{fontSize:"20px", textAlign:'center', paddingTop:'80px'}}>loading...</div>)}>
        <div style={{minWidth:"1200px", margin:"0 auto", overflow:"auto"}}>
          <TopAndBottomBtn/>
          <QuickSide/>
          <Switch>
            <Route exact path="/" component={LandingPage} lading/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/register_agmall" component={Register_AGmall}/>
            <Route exact path="/usageterms" component={UsageTerms}/>
            <Route exact path="/personalterms" component={PersonalTerms}/>
            <Route exact path="/Register_AGmall_2step" component={Register_AGmall_2step/* Register_AG_2_restrict(Register_AGmall_2step) */}/>
            <Route exact path="/Register_AGmall_3step" component={Register_AG_3_restrict(Register_AGmall_3step)}/>
          </Switch>
          <Footer/>
        </div>
    </Suspense>
  );
}

export default App;