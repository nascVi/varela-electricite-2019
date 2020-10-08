import React from 'react'
import Service from './GSec-SIcons'
import { services } from '../../data/services'

const Gallery = () => {
    return ( 
    <div className="wrapper">
        {services.map(service => <Service key={services.id} {...service} />)}     
    </div>
    )
}

export default Gallery

