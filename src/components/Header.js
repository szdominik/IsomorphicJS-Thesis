import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Main Page</Link></li>
                <li><Link to="/sayHello">Say Hello!</Link></li>
                <li><Link to="/incNum">Increase a Number!</Link></li>
            </ul>
        </div>
    )
}