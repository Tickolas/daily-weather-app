import React from 'react';
import { Button } from 'components/Button/Button';
import log from 'loglevel';

describe('Button', () => {
    describe('Default form', () => {
        it('should match snapshot', () => {
            expect(
                mount(
                    <Button classes={{}} onClick={() => log.info('This is the default button')}>
                        Default button
                    </Button>
                )
            ).toMatchSnapshot();
        });
    });
});
