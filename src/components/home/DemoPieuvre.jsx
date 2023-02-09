import React from 'react'
import { Fade } from 'react-reveal'

const DemoPieuvre = () => {
  return (
    <div className='demo-pieuvre'>
        <Fade left delay={5000}>
            <div className='demo-pieuvre__pic'/>
        </Fade>
        
        <Fade>
            <div className='demo-pieuvre__schema'/>
        </Fade>
        <Fade right delay={4000} >
            <h3 className='demo-pieuvre__info'><em> Nos pieuvres en kit prêtent à l'installation</em></h3>
        </Fade>
    </div>
  )
}

export default DemoPieuvre
