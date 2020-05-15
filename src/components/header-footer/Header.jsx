import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../ui/Nav'
import { HamburgerArrow } from 'react-animated-burgers'
import SideBar from './SideBar'
import {Fade} from 'react-reveal'
class Header extends Component {
    state = {
        showSideBar: false,
    }

    showSideBar = () => {
        const { showSideBar } = this.state;
        this.setState({ showSideBar: !showSideBar });
    }

    render(isActive) {
        const { showSideBar } = this.state;
        return (
        <Fade top delay={700}>
            <header className="header">
                <div className="wrapper wrapper--header">
                    <Link className="header__logo-link" to="/">
                        <div className="logo"></div>
                    </Link>
                    <Nav context="header" />
                    <HamburgerArrow isActive={this.state.isActive} barColor="white" buttonWidth={16} toggleButton={this.toggleButton} className="header__menu" onClick={this.showSideBar}  />
                    <SideBar showSideBar={showSideBar} />
                </div>
            </header>
        </Fade>
        )
    }
}

export default Header
