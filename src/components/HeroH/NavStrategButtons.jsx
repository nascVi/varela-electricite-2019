import React from 'react';
// import { section } from 'style.css'

const NavStrategButtons = () => {
  /* svg Design des button et annimations onClick, OnMouseover, onMouseleave(dzzit effect)
  check for pointer work*/
  // const LeftButton = () {return(<button OnMouseover={stylus}>Nous contacter</button>)}
  // const RightButton = () {return(<button OnMouseover={stylus}>Découvrir</button>)}

  return (
    <div>
    <section class="section section--menu" id="Adrian">
				<h2 class="section__title">Adrian</h2>
				<span class="link-copy"></span>
				<nav class="menu menu--adrian">
					<ul class="menu__list">
						<li class="menu__item menu__item--current"><a href="/" class="menu__link"><span class="menu__helper">Home</span></a></li>
						<li class="menu__item"><a href="/" class="menu__link"><span class="menu__helper">Recipes</span></a></li>
					</ul>
				</nav>
			</section>
    <LeftButton onClick={rediredtoSContacts} />
    <RightButton onClick={rediredtoSIntro} />
    </div>
  )
}

export default NavStrategButtons
