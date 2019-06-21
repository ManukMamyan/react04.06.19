import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import initStore from './utils/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './components/Router';


class App extends Component {
    render() {
        return (
            <Provider store={initStore([])}>
                <BrowserRouter>
                    <MuiThemeProvider>
                        <Router/>
                    </MuiThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);