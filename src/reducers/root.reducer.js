import { combineReducers } from 'redux';
import app from 'reducers/app.reducer';
import weather from 'reducers/weather.reducer';
import user from 'reducers/user.reducer';

export default function() {
    return combineReducers({
        app,
        weather,
        user
    });
}
