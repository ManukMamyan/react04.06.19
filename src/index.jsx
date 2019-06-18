import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< Updated upstream
class App extends Component {
    render() {
        return (
            <div>
                Hello World!!
            </div>
=======
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './components/Router';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>

                    <Router/>
                </MuiThemeProvider>
            </BrowserRouter>
>>>>>>> Stashed changes
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);