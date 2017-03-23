import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { logName } from '../actions'

class NameInput extends Component {
    render() {
        let input

        return (
            <form onSubmit={e => {
                e.preventDefault()
                if(input.value === '') {
                    return
                } else {
                    this.props.dispatch(logName(input.value))
                    input.value = ''
                }
            }}>
                <input type="text" placeholder="What's Your Name?"
                    ref={node => { input = node }} />
                <input type="submit" value="Say Hello!" />
            </form>
        )
    }
}

NameInput.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(NameInput)