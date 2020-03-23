import * as TYPES from 'actions/actionTypes';
import { login } from 'service/user.service';
import * as actions from 'actions/user.actions';
import { error } from 'loglevel';

jest.mock('service/user.service');

describe('User actions', () => {
    describe('login', () => {
        it('should handle a failed login', async () => {
            const expected = [{ type: TYPES.LOGIN_STARTED }, { type: TYPES.LOGIN_FAILED }];

            login.mockRejectedValue('Expected error');

            const dispatch = jest.fn();
            await actions.login()(dispatch);

            expect(error).toHaveBeenCalledWith('Expected error');
            expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
            expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
        });

        it('should handle a successful login', async () => {
            const mockToken = 'Mock token';
            const expected = [{ type: TYPES.LOGIN_STARTED }, { type: TYPES.LOGIN_SUCCESS, payload: mockToken }];

            login.mockResolvedValue({ data: { token: mockToken } });

            const dispatch = jest.fn();
            await actions.login()(dispatch);

            expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
            expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
        });
    });
});
