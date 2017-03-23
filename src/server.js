'use strict';
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createMemoryHistory'
import { StaticRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'

import probaApp from './reducers'
import Header from './components/Header'
import SayHello from './components/SayHello'
import NumberContainer from './containers/NumberContainer'

var server = express();
server.use(bodyParser.json());

server.use('/static', express.static('public'))

server.use(handleRender)

function handleRender(req, res) {
    const history = createHistory()
    const middleware = routerMiddleware(history)
    const store = createStore(probaApp, applyMiddleware(middleware))
    const context = {}
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context} history={history}>
                <div>
                    <Header />
                    <Route path="/sayHello" component={SayHello} />
                    <Route path="/incNum" component={NumberContainer} />
                </div>
            </StaticRouter>
        </Provider>
    )
    const preloadedState = store.getState()
    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Isomorphic Example - ELTE IK</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/static/clientBundle.js"></script>
            </body>
        </html>
    `
}

server.listen(process.env.PORT || 3000, function () {
	console.log('Listening on port ' + this.address().port);
});