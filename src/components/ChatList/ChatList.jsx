import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { Link} from 'react-router-dom';

const ChatList = () => (
        <List>
            <Subheader>Chat List</Subheader>
            <Link to="/chat/1/"><ListItem
                primaryText="ReactJS"
                leftAvatar={<Avatar src="/src/components/ChatList/images/React.png" />}
                rightIcon={<CommunicationChatBubble />}
            /></Link>
            <Link to="/chat/2/"><ListItem
                primaryText="AngularJS"
                leftAvatar={<Avatar src="/src/components/ChatList/images/angular.png"  />}
                rightIcon={<CommunicationChatBubble />}
            /></Link>
            <Link to="/chat/3/"><ListItem
                primaryText="VueJS"
                leftAvatar={<Avatar src="/src/components/ChatList/images/Vue.png"  />}
                rightIcon={<CommunicationChatBubble />}
            /></Link>
            <Link to="/chat/4/"><ListItem
                primaryText="Yii2 Framework"
                leftAvatar={<Avatar src="/src/components/ChatList/images/yii.png"  />}
                rightIcon={<CommunicationChatBubble />}
            /></Link>
            <Link to="/chat/5/"><ListItem
                primaryText="HTML5CSS3"
                leftAvatar={<Avatar src="/src/components/ChatList/images/html.jpg" />}
                rightIcon={<CommunicationChatBubble />}
            /></Link>
        </List>
);

export default ChatList;