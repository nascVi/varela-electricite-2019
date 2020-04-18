import React from 'react'
import Realisation from './Realisation'
import { realisations } from '../data/realisations'

const Activite = () => {
    return (
        <div className="wrapper">
            {realisations.map(realisation => <Realisation key={realisations.id} {...realisation} />)}
        </div>
    )
}

export default Activite
