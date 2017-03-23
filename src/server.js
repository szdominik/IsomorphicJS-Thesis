'use strict';

import express from 'express'
import  bodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import probaApp from './reducers'
import App from './components/App'

var server = express();
server.use(bodyParser.json());

server.use('/static', express.static('public'))

server.use(handleRender)

/*
server.get('/', function(req, res) {
	var appHtml = renderToString(<App />);
    res.send(`
        <!doctype html>
            ${appHtml}
            <script type="text/javascript" src="/clientBundle.js"></script>
        </html>
    `);
});*/

function handleRender(req, res) {
    const store = createStore(probaApp)
    const html = renderToString(
        <Provider store={store}>
            <App />
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