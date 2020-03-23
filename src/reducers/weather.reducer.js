import * as TYPES from 'actions/actionTypes';

export const initialState = {
    weather: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: payload
            };
        default:
            return state;
    }
};
