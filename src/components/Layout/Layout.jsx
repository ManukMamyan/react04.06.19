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

    state = {
        chats: {
            1: {title: 'Чат ReactJS', messageList: [1, 2]},
            2: {title: 'Чат AngularJS', messageList: [2]},
            3: {title: 'Чат VueJS', messageList: []},
            4: {title: 'Чат Yii2 Framework', messageList: []},
            5: {title: 'Чат HTML5 CSS3', messageList: []},
        },
        messages: {
            1: {
                text: "Привет!",
                sender: 'me'
            },
            2: {
                text: "Как дела?",
                sender: 'me'
            },
        },
    };

    handleSendMessage = (input) => {
        const {messages, chats} = this.state;
        const {chatId} = this.props;

        if (input.length > 0) {
            const messageId = +(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
            this.setState({
                messages: {
                    ...messages,
                    [messageId]: {text: input, sender: 'me'}
                },
                chats: {
                    ...chats,
                    [chatId]: {
                        ...chats[chatId],
                        messageList: [...chats[chatId].messageList, messageId]
                    }
                },
            });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(this.answer, 500);
        }
    }

    answer = () => {
        const {messages, chats} = this.state;
        const {chatId} = this.props;

        const messageId = +(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;

        this.setState({
            messages: {
                ...messages,
                [messageId]: {text: 'Отстань, я робот', sender: 'bot'}
            },
            chats: {
                ...chats,
                [chatId]: {
                    ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        });
    };



    render() {
        const {messages, chats} = this.state;
        const { chatId } = this.props;
        return (
            [
                <Header
                    chatTitle={this.state.chats[chatId].title}
                    numOfMessages={this.state.chats[chatId].messageList.length}
                />,
                <div className={"Layout"}>
                    <div className={"MainContent"}>
                        <ChatList/>
                        <MessageField
                            chatId={ chatId }
                            handleSendMessage={this.handleSendMessage}
                            messages={messages}
                            chats={chats}
                        />
                    </div>
                </div>
            ]
        );
    }
}