import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'

// Switch garante que uma rota por vez seja chamada
// exact diz que o caminhho deve ser exatamente a "/" para poder acessala

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}