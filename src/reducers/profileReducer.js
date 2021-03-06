import update from 'react-addons-update';

import {START_PROFILE_LOADING, SUCCESS_PROFILE_LOADING, ERROR_PROFILE_LOADING} from '../actions/profileActions';


const initialStore = {
    profiles: {},
    isLoading: false
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_PROFILE_LOADING: {
            return update(store, {
                profiles: { $set: action.payload.entities.profiles },
                isLoading: { $set: false },
            });
        }
        case ERROR_PROFILE_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}