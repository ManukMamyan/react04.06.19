import React, {Component} from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import {sendMessage} from "../../actions/messageActions";
import {chatManager} from "../../actions/chatActions";
import Message from './Message';
import './MessageField.css';


class MessageField extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        chatManager: PropTypes.func.isRequired,
        messages: PropTypes.object.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: ''
    };

    handleSendMessage = () => {
        const {input} = this.state;
        const {messages, chatId, sendMessage, chatManager} = this.props;

        if (input.length > 0) {
            const messageId = +(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
            sendMessage(messageId, input, 'me');
            chatManager(messageId, chatId);
            this.setState({
                input: ''
            });
        }
    };

    componentDidUpdate(prevProps) {
        const {messages} = this.props;
        if (Object.keys(prevProps.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(this.answer, 500);
        }
    }

    answer = () => {
        const {messages, chatId, chatManager, sendMessage} = this.props;

        const messageId = +(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
        sendMessage(messageId, 'Отстань, я робот', 'bot', chatId);
        chatManager(messageId, chatId);
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
        const {input} = this.state;
        const {chats, messages, chatId} = this.props;

        const messageElements = chats[chatId].messageList.map((msgId, index) => (
                <Message key={index}
                         text={messages[msgId].text}
                         sender={messages[msgId].sender}/>
            )
        );

        return (
            <div className={"MessageField"}>
                {messageElements}
                <div className={"inputField"}>
                    <TextField style={{width: '693px'}}
                               name="input"
                               value={input}
                               onChange={this.handleType}
                               onKeyUp={this.handleKeyUp}
                               hintText="Напишите сообщение"
                    />
                    <FloatingActionButton onClick={this.handleSendMessage}>
                        <SendIcon/>
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({messageReducer, chatReducer}) => ({
    messages: messageReducer.messages,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage, chatManager}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);