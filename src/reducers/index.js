import { combineReducers } from 'redux'

import name from './name'
import number from './number'

const probaApp = combineReducers({
    name,
    number
})

export default probaApp