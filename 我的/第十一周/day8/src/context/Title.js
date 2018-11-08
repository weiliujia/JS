import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Title extends Component {
    constructor() {
        super()
    }
    static contextTypes={
        color: PropTypes.string
    }
    render() {
        return (
            <div style={{ color: this.context.color }}>
            看今天大太阳
            </div>
        )
    }
}

