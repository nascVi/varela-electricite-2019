import React from 'react'
import "./Gallery.scss"


const Gallery = () => {
    return (
        <div className="App">
        <br /><br />
        <h1>Services & Références</h1>
        <div className="container">
            <div className="lcard">
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1622800029/partners-logos/7-pl_p5y20t.png" height="100" width="250" alt="" />
                </a>
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:fdfdfd/v1623398806/partners-logos/2-pl_bumuyl.png" height="100" width="250" alt="" />
                </a>
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1622800028/partners-logos/4-pl_c8yc7s.png" height="100" width="250" alt="" />
                </a>
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1623398806/partners-logos/1-pl_v59xid.png" height="100" width="250" alt="" />
                </a>
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1623398806/partners-logos/6-pl_cttvbk.png" height="100" width="250" alt="" />
                </a>
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1623399383/partners-logos/3-pl_dicg17.png" height="100" width="250" alt="" />
                </a>
                <a href="/#">
                <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:fffbfb/v1622800028/partners-logos/5-pl_becgqm.png" height="100" width="250" alt="" />
                </a>
            </div>
            <div className="rcard">
                <h3>Services & Références</h3>
                <hr />
                <p>
                    Spécialisée dans le secteur de l’installation électrique générale et de la domotique, nous
                    intervenons principalement sur les chantiers de construction neuf (immeuble et maison
                    individuelle) ou de logements en rénovation.
                </p>
                <hr />
                <h3>Nos partenaires</h3>
                <hr />
                <p>
                    Voici les promoteurs immobiliers et constructeurs de maisons individuelles qui nous font
                    confiance dans l’élaboration complète de leur travaux d’électricité courant fort / courant
                    faible.
                </p>
                <p>
                    Comme eux faites-nous confiance et prenez contact avec notre service commercial au
                    tel:&nbsp;
                    <a href="phone:">
                    01.60.64.98.96
                    </a>&nbsp;
                    ou par mail:&nbsp; 
                    <a href="mailto:contact@varela-electricite.com">
                    contact@varela-electricite.com 
                    </a>
                    &nbsp;pour plus d’informations.
                </p> 
            </div>
        </div>
    </div>

    )
}

export default Gallery

