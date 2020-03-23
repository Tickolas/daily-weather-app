import * as TYPES from 'actions/actionTypes';
import axios from 'axios';
import { BASE_URL } from 'constants/api.constants';

export const initialState = {
    isLoading: false
};

export default (state = initialState, { type }) => {
    switch (type) {
        case TYPES.LOGIN_STARTED:
            axios.defaults.baseURL = BASE_URL;
            return { ...state, isLoading: true };
        case TYPES.FETCH_WEATHER_STARTED:
            return { ...state, isLoading: true };
        default:
            return { ...state, isLoading: false };
    }
};
