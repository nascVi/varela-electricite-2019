import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../ui/Nav'
import HamburgerElastic from '../thisam/HamburgerElastic'
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

    render() {
        const { showSideBar } = this.state;
        return (
        <Fade top delay={700}>
            <header className="header">
                <div className="wrapper wrapper--header">
                    <Link className="header__logo-link" to="/">
                        <div className="logo"></div>
                    </Link>
                    <Nav context="header" />
                    <HamburgerElastic onClick={this.showSideBar} isActive={this.state.showSideBar} barColor="white" buttonWidth={16} toggleButton={this.isActive} className="header__menu" />
                    <SideBar showSideBar={showSideBar} />
                </div>
            </header>
        </Fade>
        )
    }
}

export default Header
