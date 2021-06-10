import React from 'react'
import { folio } from '../data/folio'
import Button from '@material-ui/core/Button'
import { Flip } from 'react-reveal'
import { Link } from 'react-router-dom'

const Folio = () => {
    return (
        <div className="wrapper">
            <div className="folio">
                {folio.map((folioItem, i) => {
                    const {pic, desc, month, location} = folioItem
                    return (
                        <Flip delay={i*80} right key={i}>
                            <div className="folio__item">
                                <div className="folio__date">
                                    <div className="folio__day">
                                        <img src={pic} width='150' height='150' alt={desc} />
                                    </div>
                                    <div className="folio__month">
                                        {month}
                                    </div>
                                </div>
                                <div className="folio__details">
                                    <div className="folio__location">
                                        {location}
                                    </div>
                                    <Link to="/activité">
                                        <Button variant="outlined" color="primary">caractéristiques</Button>                                        
                                    </Link>
                                </div>
                            </div>
                        </Flip>
                    )
                })}
            </div>
        </div>
    )
}

export default Folio
