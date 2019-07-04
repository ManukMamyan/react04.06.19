import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {PersistGate} from 'redux-persist/integration/react';

import initStore from './utils/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './components/Router';

const history = createHistory();
const middleware = routerMiddleware(history);
const {store, persistor} = initStore([middleware]);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <MuiThemeProvider>
                            <Router/>
                        </MuiThemeProvider>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>

        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);