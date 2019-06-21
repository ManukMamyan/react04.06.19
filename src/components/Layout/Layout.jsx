import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Layout.css';
import MessageField from '../MessageField';
import ChatList from '../ChatList';
import Header from '../Header';

export default class Layout extends Component {

    static propTypes = {
        chatId: PropTypes.number.isRequired
    };

    static defaultProps = {
        chatId: 1,
    };



    render() {
        const { chatId } = this.props;
        return (
            [
                <Header chatId={chatId} />,
                <div className={"Layout"}>
                    <div className={"MainContent"}>
                        <ChatList/>
                        <MessageField
                            chatId={ chatId }
                        />
                    </div>
                </div>
            ]
        );
    }
}