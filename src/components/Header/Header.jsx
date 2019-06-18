import React, { Component } from 'react';
<<<<<<< Updated upstream
import classNames from 'classnames';
=======
import { Link} from 'react-router-dom';
import PropTypes from "prop-types";
import './Header.css';


import Menu from './Menu'
>>>>>>> Stashed changes

export default class Header extends Component {
    static propTypes = {
        chatTitle: PropTypes.string,
        numOfMessages: PropTypes.number
    };

    static defaultProps = {
        chatTitle: 'Чат не выбран',
        numOfMessages: 0
    };

    render() {
        return(
<<<<<<< Updated upstream
            <header className={"header"}>Header</header>
=======
            <header className={"header"}>
                <Menu />
                <div><Link to='/profile/'>Profile</Link></div>
                <div>
                    <h1>{this.props.chatTitle}</h1>
                    <p>Количество сообщений: {this.props.numOfMessages}</p>
                </div>
            </header>
>>>>>>> Stashed changes
        );
    }
}