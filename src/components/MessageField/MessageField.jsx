import React, {Component} from 'react';
<<<<<<< Updated upstream
import Message from './Message';
import './MessageField.css';

export default class MessageField extends Component {
    state = {
        messages: ["Привет!", "Как дела?"],
        canReply: false
    };

    handleClick = () => {
        this.setState(
            {
                messages:
                    [
                        ...this.state.messages,
                        "Все отлично!"
                    ],
                canReply: !this.state.canReply,
            })
    };

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => {
            if (this.state.canReply) {
                this.setState(
                    {
                        messages:
                            [
                                ...this.state.messages,
                                "Привет, это бот, вам скоро ответят"
                            ],
                        canReply: !this.state.canReply,
                    })
            }
        }, 500);
    }

    render() {
        const messages = this.state.messages.map((message, index) => (
            <Message key={index} text={message}/>
        ));

        return (
            <div>
                {messages}
                <button className={'reply'} onClick={this.handleClick}>Отправить</button>
=======
import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";

import Message from './Message';
import './MessageField.css';


export default class MessageField extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        handleSendMessage: PropTypes.func.isRequired,
        messages: PropTypes.object,
        chats: PropTypes.object
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: ''
    };

    handleSendMessage = () => {
        this.props.handleSendMessage(this.state.input)
        this.setState({
            input: ''
        });
    };

    handleType = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input);
        }
    };


    render() {
        const {messages, chats} = this.props;
        const {chatId} = this.props;

        const messageElements = chats[chatId].messageList.map((msgId, index) => (
            <Message key={index} text={messages[msgId].text}
                     sender={messages[msgId].sender}/>));

        return (
            <div className={"MessageField"}>
                {messageElements}
                <div className={"inputField"}>
                    <TextField style={{width: '693px'}}
                               name="input"
                               value={this.state.input}
                               onChange={this.handleType}
                               onKeyUp={this.handleKeyUp}
                               hintText="Напишите сообщение"
                    />
                    <FloatingActionButton onClick={this.handleSendMessage}>
                        <SendIcon/>
                    </FloatingActionButton>
                </div>
>>>>>>> Stashed changes
            </div>

        );
    }
}