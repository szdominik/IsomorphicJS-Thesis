import React, { Component, PropTypes } from 'react'
import NumberIncButton from '../containers/NumberIncButton'

export default class NumberIncrease extends Component {
    render() {
        return (
            <div>
                <p>Our number: {this.props.number}</p>
                <NumberIncButton />
            </div>
        )
    }
}

NumberIncrease.propTypes = {
    number: PropTypes.number.isRequired
}