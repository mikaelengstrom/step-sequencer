import React, { Component } from 'react'

import Controller from './Controller'
import Steps from './Steps'

export default class App extends Component {
    render() {
        return (
            <div>
                <Steps />
                <Controller />
            </div>
        )
    }
}
