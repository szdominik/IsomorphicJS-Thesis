'use strict';
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import probaApp from './reducers'
import App from './components/App'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(probaApp, preloadedState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)