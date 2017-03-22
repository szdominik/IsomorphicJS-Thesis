import React, { Component, PropTypes } from 'react'

export default class NameDisplay extends Component {
    render() {
        return (
            <p>
                Hello {this.props.name}!
            </p>
        )
    }
}

NameDisplay.propTypes = {
    name: PropTypes.string.isRequired
}