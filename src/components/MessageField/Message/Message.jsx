import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import Chip from 'material-ui/Chip';


export default class Message extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };

    render() {

        const styleBot = {
            backgroundColor: 'lightblue',
            margin: '10px 0 0 300px',
        };

        const styleMe = {
            margin: '10px 0 0 5px'
        };


        return <Chip style={this.props.sender === 'bot' ? styleBot : styleMe}>
            {this.props.text}
        </Chip>
    }
}