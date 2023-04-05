import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import First from './component/classComponent'
import Second from './component/functionComponent'
import TodoList from './component/todoList'
const App = document.getElementById('root')
const root = createRoot(App);
root.render(<First/>);
// root.render(<TodoList></TodoList>)

