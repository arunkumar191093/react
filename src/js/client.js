import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute,hashHistory} from 'react-router';

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';
import Test from './pages/Test';

const app = document.getElementById('app');

// ReactDOM.render(<Layout/>  ,app);
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" component={Archives}></Route>
            <Route path="settings" component={Settings}></Route>
            <Route path="test" component={Test}></Route>
        </Route>
    </Router>,
app);