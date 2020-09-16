import React from 'react'
import SIcon from './sicon'

const SIconGrid = () => {
    return (
        <div style={styles}>
            <SIcon />
            <SIcon />
            <SIcon />
            <SIcon />
        </div>
    )
}

const styles = {
    height: '35%',
    width: '100%',
    background: '#333',
    opacity: '0.8',
    display: 'flex',
    flex: 'wrap     '
}

export default SIconGrid