import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-open-sans'
import './index.css'
import App from './App'

// disable context menu
document.addEventListener('contextmenu', event => event.preventDefault())

ReactDOM.render(<App />, document.getElementById('root'))
