import React from 'react'
import { connect } from 'react-redux';
import NumberIncrease from '../components/NumberIncrease'

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

const NumberContainer = connect(mapStateToProps)(NumberIncrease)

export default NumberContainer