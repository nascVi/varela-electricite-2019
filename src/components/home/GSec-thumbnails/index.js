import React, { Component } from 'react'
import ActiveThumbnailWindow from './active-thumbnail-window'
import ThumbnailGrid from './sicon-grid'
import axios from 'axios'

export default class ThumbnailGallery extends Component {
    state = {
        thumbnails: []
    }

    componentDidMount() {
        axios.get('')
        .then(res => {
            console.log(res.data.thumbnails)
            this.setState({ thumbnails: res.data.thumbnails })
        })
    }

    render() {
        return (
            <div style={thumbnailGalleryStyles}>
                
                {/* Left Side */}
                <div style={{ flex: 1}}>
                    <ActiveThumbnailWindow />
                    <ThumbnailGrid />
                </div>

                 {/* Right Side */}
                <div style={{ flex: 1}}>
                        Right
                </div>
            </div>
        )
    }
}

const thumbnailGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex',
    opacity: '0.9'
}
