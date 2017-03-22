import React from 'react'
import { connect } from 'react-redux';
import NameDisplay from '../components/NameDisplay'

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const NameDisplayContainer = connect(mapStateToProps)(NameDisplay)

export default NameDisplayContainer