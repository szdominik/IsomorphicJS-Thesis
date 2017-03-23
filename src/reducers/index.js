import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import name from './name'
import number from './number'

const probaApp = combineReducers({
    name,
    number,
    routing: routerReducer
})

export default probaApp