import React, {Component} from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import {sendMessage} from "../../actions/messageActions";
import Message from './Message';
import './MessageField.css';


class MessageField extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: ''
    };

    handleSendMessage = () => {
        const {input} = this.state;
        const {messages, chatId, sendMessage } = this.props;

        if (input.length > 0) {
            const messageId = +(Object.keys(messages)[Object.keys(messages).length - 1]) + 1;
            sendMessage(messageId, input, 'me', chatId);
            this.setState({
                input: ''
            });
        }
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

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);