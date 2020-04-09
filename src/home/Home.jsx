import React from 'react'
import Nav from '../components/ui/Nav'

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div>
                    <div className="logo"></div>
                    <Nav />
                    <div className="home__caption">Vue sur les chantiers récents</div>
                </div>
                <div className="home__scroll-down"></div>
            </div>

        </div>
    )
}

export default Home
