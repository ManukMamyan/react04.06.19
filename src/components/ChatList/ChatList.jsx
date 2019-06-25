import React, {Component} from 'react';
import PropTypes from "prop-types";
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class ChatList extends Component {

    static propTypes = {
        highlightedChat: PropTypes.number
    };

    static defaultProps = {
        highlightedChat: undefined,
    };

    render() {

        console.log(this.props);

        return (
            <List>
                <Subheader>Chat List</Subheader>
                <Link to="/chat/1/">
                    <ListItem
                        primaryText="ReactJS"
                        leftAvatar={<Avatar src="/src/components/ChatList/images/React.png"/>}
                        rightIcon={<CommunicationChatBubble/>}
                        style={{backgroundColor: this.props.highlightedChat === 1 ? 'red' : ''}}
                    />
                </Link>
                <Link to="/chat/2/">
                    <ListItem
                        primaryText="AngularJS"
                        leftAvatar={<Avatar src="/src/components/ChatList/images/angular.png"/>}
                        rightIcon={<CommunicationChatBubble/>}
                        style={{backgroundColor: this.props.highlightedChat === 2 ? 'red' : ''}}
                    />
                </Link>
                <Link to="/chat/3/">
                    <ListItem
                        primaryText="VueJS"
                        leftAvatar={<Avatar src="/src/components/ChatList/images/Vue.png"/>}
                        rightIcon={<CommunicationChatBubble/>}
                        style={{backgroundColor: this.props.highlightedChat === 3 ? 'red' : ''}}
                    />
                </Link>
                <Link to="/chat/4/">
                    <ListItem
                        primaryText="Yii2 Framework"
                        leftAvatar={<Avatar src="/src/components/ChatList/images/yii.png"/>}
                        rightIcon={<CommunicationChatBubble/>}
                        style={{backgroundColor: this.props.highlightedChat === 4 ? 'red' : ''}}
                    />
                </Link>
                <Link to="/chat/5/">
                    <ListItem
                        primaryText="HTML5CSS3"
                        leftAvatar={<Avatar src="/src/components/ChatList/images/html.jpg"/>}
                        rightIcon={<CommunicationChatBubble/>}
                        style={{backgroundColor: this.props.highlightedChat === 5 ? 'red' : ''}}
                    />
                </Link>
            </List>
        )
    }
}


const mapStateToProps = ({chatReducer}) => ({
    highlightedChat: chatReducer.highlightedChat,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);