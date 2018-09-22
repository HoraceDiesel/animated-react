import * as React from "react"
import * as ReactDOM from "react-dom"

import Navigation from './components/Navigation'
import PushLayout from './components/PushLayout'
import './stylesheets/index.css'

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <PushLayout />
    </div>
  )
}

export default App

const rootNode = document.getElementById("app")

rootNode ? ReactDOM.render(<App /> , rootNode) : false