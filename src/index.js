import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import First from './component/classComponent'
import Second from './component/functionComponent'
const App = document.getElementById('root')
const root = createRoot(App);
root.render(<First/>);

