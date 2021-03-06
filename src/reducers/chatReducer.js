import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import {
    UNHIGHLIGHT_CHAT,
    HIGHLIGHT_CHAT,
    SEND_CHAT,
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING
} from '../actions/chatActions';

const initialStore = {
    chats: {
/*        1: {title: 'Чат ReactJS', messageList: [1, 2]},
        2: {title: 'Чат AngularJS', messageList: [2]},
        3: {title: 'Чат VueJS', messageList: []},
        4: {title: 'Чат Yii2 Framework', messageList: []},
        5: {title: 'Чат HTML5 CSS3', messageList: []},*/
    },
    isLoading: true,
    highlightedChat: undefined,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case START_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }
        case ERROR_CHATS_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }

        case SEND_MESSAGE: {
            return update(store, {
                chats: {
                    $merge: {
                        [action.chatId]: {
                            title: store.chats[action.chatId].title,
                            messageList: [...store.chats[action.chatId].messageList, action.messageId]
                        }
                    }
                }
            });
        }

        case SEND_CHAT: {
            return update(store, {
                chats: {
                    $set: {
                        ...store.chats, [action.chatId]: {
                            title: action.title,
                            messageList: []
                        }
                    }
                },
            });
        }

        case HIGHLIGHT_CHAT: {
            return update(store, {
                highlightedChat: {$set: action.chatId},
            });
        }

        case UNHIGHLIGHT_CHAT: {
            return update(store, {
                highlightedChat: {$set: undefined},
            });
        }

        default:
            return store;
    }
}