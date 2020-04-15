import React from 'react'
import Nav from '../ui/Nav'
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__header">
                    <BackgroundVideo className="backgroundVid" />
                    <div className="wrapper">
                        <div className="logo"></div>
                        <Nav context="home" />
                        <div className="home__caption">VUE SUR NOS REALISATIONS</div>
                        <div className="home__scroll-down"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
