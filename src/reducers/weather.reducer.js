import * as TYPES from 'actions/actionTypes';

export const initialState = {
    weatherData: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weatherData: payload
            };
        default:
            return state;
    }
};
