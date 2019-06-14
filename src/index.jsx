import React, {Component} from 'react';
import ReactDom from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageField from './components/MessageField';
import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Layout />
            </MuiThemeProvider>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);