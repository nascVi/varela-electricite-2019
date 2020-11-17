import React from 'react'
import Nav from '../ui/Nav'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
import Landing from './Landing'
import { Element, scroller } from 'react-scroll'
import { Fade } from 'react-reveal'
import ReactParticles from 'react-particles-js'

import Gallery from './Gallery'

const Particles = ({ children }) => {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={{
        particles: {
              number: {
                value: 81
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: true,
                color:{
                  value: "#8176c3"
                }
              },
              color: {
                value: "#4CD9E4"
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
        },
      interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    }
                }
        },
      retina_detect: true
      }}
          style={{
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
        {children && <div style={{ position: 'relative' }}>{children}</div>}
      </div>
    );
}

function InaSpace({ children }) {
    return (
        <div className="innerSpace">
            <div className="iS-body">{children}</div>
        </div>
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
      <Particles>
        <div className="home">
            <Fade>
                <div className="home__hero">
                    <BackgroundVideo className="backgroundVid" />
                    <div className="wrapper">
                        <div className="logo"></div>
                        <Nav context="home" />
                        <div className="home__caption" onClick={() => scrollToLanding('')}>
                            
                        </div>
                        <h6 className="home__caption-hint">Je planifie une première visite<span className="home__coffee" role="img" aria-label="coffee"></span></h6>
                        <div className="home__scroll-down" onClick={() => scrollToLanding('home__coffee')} />
                    </div>
                </div>
                <Fade left>
                <hr className="ColoredHr0"/>
                </Fade>
                <Fade right delay={1000} >
                <hr className="ColoredHr1"/>
                </Fade>
                <Fade bottom duration={1000} delay={2000} >
                <hr className="ColoredHr"/>
                </Fade>
                {/* <CloudinaryContext cloudName="nascvi"> like SDisplay section! */}
                
                {/* </CloudinaryContext> */}
                <InaSpace>
                    <Element name="landing">
                        <Landing />
                    </Element>
                </InaSpace>
                <Gallery />

                <div>
                  <br/>
                  <br/>
                  <br/>
                </div>
            </Fade>
        </div>
      </Particles>
    )
}

export default Home
