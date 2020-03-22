import { combineReducers } from 'redux';
import weather from 'reducers/weather.reducer';
import user from 'reducers/user.reducer';

export default function() {
    return combineReducers({
        weather,
        user
    });
}
