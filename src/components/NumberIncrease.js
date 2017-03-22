import React, { Component, PropTypes } from 'react'
import { incNum } from '../actions'

export default class NumberIncrease extends Component {
    render() {
        const { number, dispatch } = this.props;

        return (
            <div>
                <p>Aktuálisan: {number}</p>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch(incNum())
                }}>
                    <input type="submit" value="Növeljük!" />
                </form>
            </div>
        )
    }
}

NumberIncrease.propTypes = {
    dispatch: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired
}