import React from 'react' ;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import LoadUser from './pages/LoadUser';
import Select from './pages/Select';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/LoadUser" component={LoadUser}/>
                <Route path="/Artista/:id" component={Select}/>
                <Route path="/Album" component={Select}/>
                <Route path="/Playlist" component={Select}/>
            </Switch>
        </BrowserRouter>
    )
}