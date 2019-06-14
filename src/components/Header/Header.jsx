import './Header.css';
import React, { Component } from 'react';

import Menu from './Menu'

export default class Header extends Component {
    render() {
        return(
            <header className={"header"}>
                <Menu />
            </header>
        );
    }
}