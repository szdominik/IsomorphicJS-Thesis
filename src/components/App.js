import React from 'react'
import NameDisplayContainer from '../containers/NameDisplayContainer'
import NameInput from '../containers/NameInput'
import NumberContainer from '../containers/NumberContainer'

export default () => {
    return (
        <div>
            <NameDisplayContainer />
            <NameInput />
            <br />
            <br />
            <NumberContainer />
        </div>
    )
}