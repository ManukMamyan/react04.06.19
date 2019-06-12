import React, {Component} from 'react';
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
            </div>

        );
    }
}