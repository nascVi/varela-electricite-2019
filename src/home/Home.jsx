import React from 'react'
import Nav from '../ui/Nav'

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="wrapper">
                    <div className="logo"></div>
                    <Nav context="home" />
                    <div className="home__caption">Vue sur les chantiers récents</div>
                    <div className="home__scroll-down"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
