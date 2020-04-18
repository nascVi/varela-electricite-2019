import React from 'react'
import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
import Landing from './Landing'
import { Element, scroller } from 'react-scroll'


const Home = () => {

    const scrollToLanding = elem => {
        scroller.scrollTo(elem, {
            duration: 800,
            delay: 100,
            smooth: true
        })
    }

    return (
        <>
            <div className="home">
                <div className="home__header">
                    <BackgroundVideo className="backgroundVid" />
                    <div className="wrapper">
                        <div className="logo"></div>
                        <Nav context="home" />
                        <div className="home__caption" onClick={() => scrollToLanding('landing')}>NOS REALISATIONS</div>
                        <h6>Ou tapotez/cliquez la souris pour la fiche contacte imédiate</h6>
                        <div className="home__scroll-down" onClick={() => scrollToLanding('footer')} ></div>
                    </div>
                </div>
                <Element name="landing">
                    <Landing />
                </Element>
            </div>
        </>
    )
}

export default Home
