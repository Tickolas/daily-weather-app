import * as TYPES from 'actions/actionTypes';
import axios from 'axios';

export const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.LOGIN_SUCCESS:
            axios.defaults.headers.common['Authorization'] = payload;
            return state;
        default:
            return state;
    }
};
