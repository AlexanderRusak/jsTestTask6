import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Actors from './components/actors';
import Main from './components/main';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/actors" component={Actors}/>
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
