import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ChatList = () => (
        <List>
            <Subheader>Chat List</Subheader>
            <ListItem
                primaryText="ReactJS"
                leftAvatar={<Avatar src="/src/components/ChatList/images/React.png" />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="AngularJS"
                leftAvatar={<Avatar src="/src/components/ChatList/images/angular.png"  />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="VueJS"
                leftAvatar={<Avatar src="/src/components/ChatList/images/Vue.png"  />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="Yii2 Framework"
                leftAvatar={<Avatar src="/src/components/ChatList/images/yii.png"  />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                primaryText="HTML5CSS3"
                leftAvatar={<Avatar src="/src/components/ChatList/images/html.jpg" />}
                rightIcon={<CommunicationChatBubble />}
            />
        </List>
);

export default ChatList;