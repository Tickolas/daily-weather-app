import reducer, { initialState } from 'reducers/app.reducer';
import * as TYPES from 'actions/actionTypes';
import axios from 'axios';
import { BASE_URL } from 'constants/api.constants';

describe('App reducer', () => {
    it('should handle LOGIN_STARTED', () => {
        const newState = reducer(initialState, { type: TYPES.LOGIN_STARTED });

        expect(axios.defaults.baseURL).toEqual(BASE_URL);
        expect(newState).toEqual({ isLoading: true });
    });

    it('should handle FETCH_WEATHER_STARTED', () => {
        const newState = reducer(initialState, { type: TYPES.FETCH_WEATHER_STARTED });

        expect(newState).toEqual({ isLoading: true });
    });

    it('should handle FETCH_WEATHER_STARTED then FETCH_WEATHER_SUCCESS', () => {
        const newState = reducer(initialState, { type: TYPES.FETCH_WEATHER_STARTED });

        expect(newState).toEqual({ isLoading: true });

        const finalState = reducer(newState, { type: TYPES.FETCH_WEATHER_SUCCESS });

        expect(finalState).toEqual({ isLoading: false });
    });
});
