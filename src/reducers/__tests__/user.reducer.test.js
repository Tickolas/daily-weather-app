import reducer, { initialState } from 'reducers/user.reducer';
import * as TYPES from 'actions/actionTypes';
import axios from 'axios';

describe('User reducer', () => {
    it('should handle LOGIN_SUCCESS', () => {
        const mockToken = 'Mock token';
        const newState = reducer(initialState, { type: TYPES.LOGIN_SUCCESS, payload: mockToken });

        expect(axios.defaults.headers.common['Authorization']).toEqual(mockToken);

        expect(newState).toEqual(initialState);
    });
});
