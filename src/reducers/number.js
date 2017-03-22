import { NUMBER } from '../actions'

const number = (state = 0, action) => {
    switch (action.type) {
        case NUMBER:
            var num = state + 1
            return num
        default:
            return state
    }
}

export default number