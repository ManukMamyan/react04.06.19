import React from 'react';
import PropTypes from "prop-types";
import { push } from 'react-router-redux';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import CircularProgress from 'material-ui/CircularProgress'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import { sendChat, loadChats } from "../../actions/chatActions";


class ChatList extends React.Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        sendChat: PropTypes.func.isRequired,
        loadChats: PropTypes.func.isRequired,
        chats: PropTypes.object.isRequired,
        highlightedChat: PropTypes.number,
        isLoading: PropTypes.bool.isRequired
    };

    static defaultProps = {
        highlightedChat: undefined,
    };

    handleNavigate = (link) => {
        this.props.push(link)
    };

    state = {
        input: ''
    };

    componentDidMount() {
        this.props.loadChats();
    }

    handleSendChat = () => {
        const { input } = this.state;
        const { chats } = this.props;

        if (input.length > 0) {
            const chatId = Object.keys(chats).length + 1;
            this.props.sendChat(chatId, input, []);
            this.setState({
                input: '',
            });
        }
    };

    handleType = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleSendChat();
        }
    };

    render() {
        const { chats, highlightedChat, isLoading } = this.props;

        if (isLoading) {
            return <CircularProgress />
        }

        const chatElements = Object.keys(chats).map((chId, index) => (
            <ListItem
                key={ index }
                onClick={ () => this.handleNavigate(`/chat/${chId}/`) }
                primaryText={ chats[chId].title }
                leftAvatar={ <Avatar icon={<FileFolder />} /> }
                style={{ backgroundColor: highlightedChat === +chId ? 'red' : '' }}
            />));

        return (
            <div>
                <List>
                    { chatElements }
                </List>
                <div className="input-field">
                    <TextField
                        name="input"
                        value={ this.state.input }
                        onChange={ this.handleType }
                        onKeyUp={ this.handleKeyUp }
                        hintText="Напишите сообщение"
                    />
                    <FloatingActionButton
                        onClick={ this.handleSendChat }
                        mini={ true }
                        style={{
                            verticalAlign: 'middle',
                            marginLeft: '16px'
                        }}>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    highlightedChat: chatReducer.highlightedChat,
    isLoading: chatReducer.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ push, sendChat, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);