import * as TYPES from './actionTypes';
import * as UserService from 'service/user.service';

export function login() {
    return async dispatch => {
        try {
            dispatch({ type: TYPES.LOGIN_STARTED });

            const result = await UserService.login();

            dispatch({
                type: TYPES.LOGIN_SUCCESS,
                payload: {
                    auth: result
                }
            });
        } catch (e) {
            dispatch({
                type: TYPES.LOGIN_FAILED
            });
        }
    };
}
