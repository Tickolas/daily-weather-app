import * as TYPES from './actionTypes';
import * as UserService from 'service/user.service';
import { error } from 'loglevel';
import { getTodaysWeather } from 'actions/weather.actions';

export function login() {
    return async dispatch => {
        try {
            dispatch({ type: TYPES.LOGIN_STARTED });

            const result = await UserService.login();

            dispatch({
                type: TYPES.LOGIN_SUCCESS,
                payload: result.data.token
            });
            dispatch(getTodaysWeather());
        } catch (e) {
            error(e);
            dispatch({
                type: TYPES.LOGIN_FAILED
            });
        }
    };
}
