import React from 'react'
import { boutique } from '../../data/boutique'
import { Fade } from 'react-reveal'
import UniteBoutique from './UniteBoutique'

const Boutique = () => {
    const compteursBoutique = boutique.filter(unite => unite.type === 'compteurs');
    const cablesBoutique = boutique.filter(unite => unite.type === 'cables');
    const kitsDomotiqueBoutique = boutique.filter(unite => unite.type === 'kitsDomotique');

    const renderUnites = unitesBoutique => (
        unitesBoutique.map((uniteBoutique, i) => <UniteBoutique {...uniteBoutique} key={i} />)
    )
    return (
        <div className="wrapper">
            <div className="boutique">
                <h1>MATERIEL RECOMMANDE</h1>
                <Fade>
                    <h3>COMPTEURS</h3>
                    <div className="boutique__range">
                        {renderUnites(compteursBoutique)}
                    </div>
                </Fade>
                <Fade>
                    <br />
                    <h3>CABLES</h3>
                    <div className="boutique__range">
                        {renderUnites(cablesBoutique)}
                    </div>
                </Fade>
                <Fade>
                    <br />
                    <h3>KITS DOMOTIQUES</h3>
                    <div className="boutique_range">
                        {renderUnites(kitsDomotiqueBoutique)}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Boutique
