// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import Demo from './page-demo/Demo';

import PortfolioLanding from './home/PortfolioLanding';



// Dark Home Layout

// Element Layout


// Blocks Layout


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/> */}


                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={PortfolioLanding}/>



                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
