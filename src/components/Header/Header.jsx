import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import './Header.css';


import Menu from './Menu'

class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        chatTitle: PropTypes.string,
        numOfMessages: PropTypes.number
    };

    static defaultProps = {
        chatId: 1,
        chatTitle: 'Чат не выбран',
        numOfMessages: 0
    };

    render() {
        const { chatId } = this.props;
        return(
            <header className={"header"}>
                <Menu />
                <div><Link to='/profile/'>Profile</Link></div>
                <div>
                    <h1>{this.props.chats[chatId].title}</h1>
                    <p>Количество сообщений: {this.props.chats[chatId].messageList.length}</p>
                </div>
            </header>
        );
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({
    numOfMessages: Object.keys(messageReducer.messages).length,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);