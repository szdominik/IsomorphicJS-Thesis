import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { incNum } from '../actions'

class NumberIncButton extends Component {
    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.props.dispatch(incNum())
            }}>
                <input type="submit" value="Let's Increase!" />
            </form>
        )
    }
}

NumberIncButton.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(NumberIncButton)