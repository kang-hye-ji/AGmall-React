import React from 'react'
import './LandingPage.css'
import DropCont from '../Header/DropCont/DropCont'
import Header from '../Header/Header'
import QuickAndBest from './Sections/QuickAndBest/QuickAndBest'
import MD from './Sections/MD/MD'
import StoryAndBestRe from './Sections/StoryAndBestRe/StoryAndBestRe'
import Visual from './Sections/Visual/Visual';
import {withRouter} from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <DropCont/>
            <Header/>
            <div className="landingPageWrap">
                <Visual/>
                <QuickAndBest/>
                <MD/>
                <article className="banner">
                    <div className="bannerInner">
                        <h3>눈건강엔 안국건강!</h3>
                    </div>
                </article>
                <StoryAndBestRe/>
            </div>
        </div>
    )
}

export default withRouter(LandingPage)