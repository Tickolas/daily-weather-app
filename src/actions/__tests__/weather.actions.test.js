import * as TYPES from 'actions/actionTypes';
import { getTodaysWeather, weatherDataMock } from 'service/weather.service';
import * as actions from 'actions/weather.actions';
import { error } from 'loglevel';

jest.mock('service/weather.service');

describe('Weather actions', () => {
    describe('login', () => {
        it('should handle a failed fetch', async () => {
            const expected = [{ type: TYPES.FETCH_WEATHER_STARTED }, { type: TYPES.FETCH_WEATHER_FAILED }];

            getTodaysWeather.mockRejectedValue('Expected error');

            const dispatch = jest.fn();
            await actions.getTodaysWeather()(dispatch);

            expect(error).toHaveBeenCalledWith('Expected error');
            expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
            expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
        });

        it('should handle a successful fetch', async () => {
            const expected = [
                { type: TYPES.FETCH_WEATHER_STARTED },
                { type: TYPES.FETCH_WEATHER_SUCCESS, payload: weatherDataMock }
            ];

            getTodaysWeather.mockResolvedValue({ data: weatherDataMock });

            const dispatch = jest.fn();
            await actions.getTodaysWeather()(dispatch);

            expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
            expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
        });
    });
});
