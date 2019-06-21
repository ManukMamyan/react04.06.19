import update from 'react-addons-update';
import {CHAT_MANAGER} from '../actions/chatActions';

const initialStore = {
    chats: {
        1: {title: 'Чат ReactJS', messageList: [1, 2]},
        2: {title: 'Чат AngularJS', messageList: [2]},
        3: {title: 'Чат VueJS', messageList: []},
        4: {title: 'Чат Yii2 Framework', messageList: []},
        5: {title: 'Чат HTML5 CSS3', messageList: []},
    },
};


export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case CHAT_MANAGER: {
            return update(store, {
                chats: {
                    $set: {
                        ...store.chats,
                        [action.chatId]: {
                            ...store.chats[action.chatId],
                            messageList: [...store.chats[action.chatId].messageList, action.messageId]
                        }
                    }
                },
            });
        }
        default:
            return store;
    }
}