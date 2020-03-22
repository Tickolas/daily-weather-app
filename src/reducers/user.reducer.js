import * as TYPES from 'actions/actionTypes';
import axios from 'axios';

const initialState = {
    auth: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOGIN_SUCCESS:
            axios.defaults.headers.common['Authorization'] = payload.auth;
            return state;
        default:
            return state;
    }
};
