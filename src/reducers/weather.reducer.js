import * as TYPES from 'actions/actionTypes';

const initialState = {
    weather: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: payload.me.home.weather
            };
        default:
            return state;
    }
};
