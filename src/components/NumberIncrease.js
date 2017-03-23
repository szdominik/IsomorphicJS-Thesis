import React, { Component, PropTypes } from 'react'
import { incNum } from '../actions'

export default class NumberIncrease extends Component {
    render() {
        const { number, dispatch } = this.props;

        return (
            <div>
                <p>Our number: {number}</p>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch(incNum())
                }}>
                    <input type="submit" value="Let's Increase!" />
                </form>
            </div>
        )
    }
}

NumberIncrease.propTypes = {
    dispatch: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired
}