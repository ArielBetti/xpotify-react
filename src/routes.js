import React from 'react' ;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import LoadUser from './pages/LoadUser';
import Artista from './pages/Artista';
import Album from './pages/Album';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/LoadUser" component={LoadUser}/>
                <Route path="/Artista/:id" component={Artista}/>
                <Route path="/Album/:id" component={Album}/>
            </Switch>
        </BrowserRouter>
    )
}