import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/index.js';
import Spaces from './pages/spaces.js';
import Services from './pages/services.js';
import Kathy from './pages/kathy.js';
import {Header} from './components/header.js';

const App = ()=>{
    return(
        <BrowserRouter>
            
            {/* <Switch> */}
            
            {/* <Route path='/' component={Home}>
                <Route path='spaces' component={Spaces} />
                <Route path='services' component={Services} />
            </Route> */}
            
            <Route path='/' component={Header}/>
            <Route path='/home' component={Home}/>
            <Route path='/spaces' component={Spaces}/>
            <Route path='/services' component={Services}/>
            <Route path='/kathy' component={Kathy}/>
            
            {/* <Route path='/spaces' component={Spaces}/> */}
        
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, root)
