import React from 'react'
import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
import Landing from './Landing'
import { Element, scroller } from 'react-scroll'
import { Fade } from 'react-reveal'

const Home = () => {

    const scrollToLanding = elem => {
        scroller.scrollTo(elem, {
            duration: 800,
            delay: 100,
            smooth: true
        })
    }

    return (
        <div className="home">
            <Fade>
                <div className="home__hero">
                    <BackgroundVideo className="backgroundVid" />
                    <div className="wrapper">
                        <div className="logo"></div>
                        <Nav context="home" />
                        <div className="home__caption" onClick={() => scrollToLanding('landing')}>
                            JE CONSULTE?
                        </div>
                        <h6 className="home__caption-hint">Ou tick-tap/clickerais-je <span className="home__coffee" role="img" aria-label="coffee">☕</span>!?</h6>
                        <div className="home__scroll-down" onClick={() => scrollToLanding('footer')} ></div>
                    </div>
                </div>
                <Element name="landing">
                    <Landing />
                </Element>
            </Fade>
        </div>
    )
}

export default Home
