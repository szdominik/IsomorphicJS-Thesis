'use strict'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'

import probaApp from './reducers'
import Header from './components/Header'
import SayHello from './components/SayHello'
import NumberContainer from './containers/NumberContainer'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(probaApp, preloadedState, applyMiddleware(middleware))

render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <Header />
                <Route path="/sayHello" component={SayHello} />
                <Route path="/incNum" component={NumberContainer} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)