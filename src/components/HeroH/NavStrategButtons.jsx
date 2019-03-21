import React from 'react';

const NavStrategButtons = () => {
  /* svg Design des button et annimations onClick, OnMouseover, onMouseleave(dzzit effect)
  check for pointer work*/
  const LeftButton = () {return(<button OnMouseover={stylus}>Nous contacter</button>)}
  const RightButton = () {return(<button OnMouseover={stylus}>Découvrir</button>)}

  return (
    <div>

    <LeftButton onClick={rediredtoSContacts} />
    <RightButton onClick={rediredtoSIntro} />
    </div>
  )
}

export default NavStrategButtons
