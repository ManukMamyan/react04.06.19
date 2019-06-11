import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

import Header from './components/Header';
import MessageField from './components/MessageField';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MessageField />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);