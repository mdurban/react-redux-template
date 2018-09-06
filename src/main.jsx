import React from 'react'
import ReactDOM from 'react-dom'
import ParentComponentConnector from './connectors/ParentComponentConnector'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'

const store = createStore(reducer)
window.store = store

ReactDOM.render(<Provider store={store}><ParentComponentConnector /></Provider>, document.getElementById('mount'));
