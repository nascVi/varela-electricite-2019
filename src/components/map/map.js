import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
    center: {
        lat: 48.7974264,
        lng: 2.6505338,
    },
    zoom: 16,
}

// Map sort key

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
    <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAjA1MN06RdR-qOIQe9HOCGh5wTHywBPDE' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <AnyReactComponent
                lat={48.7974264}
                lng={2.6505338}
                text={'Varela-Electricite'}
            />
        </GoogleMapReact>
    </div>
)

export default GoogleMap
