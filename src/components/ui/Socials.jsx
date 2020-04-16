import React from 'react'

const Socials = ({ context }) => {
    return (
        <div className={`socials ${context === 'realisation' ? 'socials--realisation' : ''}`}>
            <div className="socials__facebook"></div>
            <div className="socials__instagram"></div>
            <div className="socials__twitter"></div>
            <div className="socials__youtube"></div>
        </div>
    )
}

export default Socials
