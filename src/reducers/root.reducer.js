import { combineReducers } from 'redux';
import weather from 'reducers/weather.reducer';

export default function() {
    return combineReducers({
        weather
    });
}
