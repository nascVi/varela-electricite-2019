
import React, { useCallback } from 'react'
import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
import Landing from './Landing'
import { Element, scroller } from 'react-scroll'
import { Fade } from 'react-reveal'

import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";

import DemoPieuvre from './DemoPieuvre'
import PhotosSlide from './PhotosSlide'
import Gallery from './Gallery'

const ParticlesBackground = ({ children }) => {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div style={{ position: 'relative' }}>
    <Particles 
    params={particlesOptions} 
    init={particlesInit} 
    style={{
      position: 'absolute',
      zIndex: 0,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    }}/>
      {children && <div style={{ position: 'relative' }}>
      {children}
      </div>
    }

    </div>
  );
}

function InaSpace({ children }) {
    return (
            <span className="inaSpace iS-body">{children}</span>
    );
}
  
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
      <ParticlesBackground>
            {/*<Fade>*/}
                <div className="home__hero">
                  <BackgroundVideo className="backgroundVid" />
                    <div className="wrapper">
                        <div className="logo"/>
                        <Nav context="home" />
                        <div className="home__caption" onClick={() => scrollToLanding('')}>
                            
                        </div>
                        <h6 className="home__caption-hint">Je planifie une première visite<span className="home__coffee" role="img" aria-label="coffee"></span></h6>
                        <div className="home__scroll-down" onClick={() => scrollToLanding('ColoredHr0')} />
                    </div>
                </div>
                <br/>
                <br/>
                <Fade left>
                <hr className="ColoredHr0"/>
                </Fade>
                <Fade right delay={1000} >
                <hr className="ColoredHr1"/>
                </Fade>
                <Fade bottom duration={1000} delay={2000} >
                <hr className="ColoredHr"/>
                </Fade>
                <DemoPieuvre />
                <PhotosSlide />
                <Gallery />

                {/* <CloudinaryContext cloudName="nascvi"> like SDisplay section! */}
                
                {/* </CloudinaryContext> */}
                <InaSpace>
                    <Element name="landing">
                        <Landing />
                    </Element>
                </InaSpace>

                <div>
                  <br/>
                  <br/>
                  <br/>
                </div>
            {/*</Fade>*/}
            </ParticlesBackground>
        </div>
    )
}

export default Home