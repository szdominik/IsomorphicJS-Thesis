import { NAME } from '../actions'

const name = (state = 'Dominik', action) => {
    switch (action.type) {
        case NAME:
            return action.name
        default:
            return state
    }
}

export default name