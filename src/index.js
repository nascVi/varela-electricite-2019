import React from "react"
import { render } from "react-dom"
import SMap from './containers/SMap/SMap'

function App() {

    return (
      <div>
       <h1>Refonte Varela Electricite</h1>
       <SMap />        
      </div>
    );
}

render(<App />, document.getElementById("root"))
