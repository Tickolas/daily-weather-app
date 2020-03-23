import * as TYPES from './actionTypes';
import * as WeatherService from 'service/weather.service';
import { error } from 'loglevel';

export function getTodaysWeather() {
    return async dispatch => {
        try {
            dispatch({ type: TYPES.FETCH_WEATHER_STARTED });

            const result = await WeatherService.getTodaysWeather();

            dispatch({
                type: TYPES.FETCH_WEATHER_SUCCESS,
                payload: result.data
            });
        } catch (e) {
            error(e);
            dispatch({
                type: TYPES.FETCH_WEATHER_FAILED
            });
        }
    };
}
