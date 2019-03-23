import React from "react"
import { render } from "react-dom"
import SMap from './containers/SMap/SMap'
import Hero from './containers/SHero/SHero'
import Sservices from './containers/Sservices/Sservices'

function App() {

    return (
      <div>
       <h1>Refonte Varela Electricite</h1>
       <Hero />
       <Sservices />
       <SMap />
      </div>
    );
}

render(<App />, document.getElementById("root"))
