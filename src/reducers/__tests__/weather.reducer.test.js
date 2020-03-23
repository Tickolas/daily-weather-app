import reducer, { initialState } from 'reducers/weather.reducer';
import * as TYPES from 'actions/actionTypes';
import { weatherDataMock } from '__mocks__/weather.mock';

describe('Weather reducer', () => {
    it('should handle FETCH_WEATHER_SUCCESS', () => {
        const newState = reducer(initialState, {
            type: TYPES.FETCH_WEATHER_SUCCESS,
            payload: weatherDataMock.data.me.home.weather
        });

        expect(newState).toEqual({ weather: weatherDataMock.data.me.home.weather });
    });
});
