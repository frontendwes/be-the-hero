import React from 'react'

import { browserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'

export default function Routes() {
    return (
        <browserRouter>
            <Switch>
                <Route path="/" component={Logon}
            </Switch>
        </browserRouter>
    )
}