import React, {Component} from 'react';
import './Layout.css';

import Header from '../Header';
import MessageField from '../MessageField';
import ChatList from '../ChatList';

export default class Layout extends Component {
    render() {
        return (
            <div className={Layout}>
                <Header/>
                <div className={"MainContent"}>
                    <ChatList />
                    <MessageField/>
                </div>
            </div>
        );
    }
}