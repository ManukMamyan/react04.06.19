import React from 'react';
import './Message.css';

export default class Message extends React.Component {

    render() {
        return <div className={'Message'}>{ this.props.text }</div>
    }
}