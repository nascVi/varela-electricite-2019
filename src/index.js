import React from "react"
import { render } from "react-dom"
import SMap from './containers/SMap/SMap'
import Hero from './containers/SHero/SHero'

function App() {

    return (
      <div>
       <h1>Refonte Varela Electricite</h1>
       <Hero />
       <SMap />        
      </div>
    );
}

render(<App />, document.getElementById("root"))
