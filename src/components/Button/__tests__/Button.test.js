import React from 'react';
import { Button } from 'components/Button/Button';
import log from 'loglevel';
import { IconRefresh } from 'icons/icons';

describe('Button', () => {
    describe('Default form', () => {
        it('should match snapshot', () => {
            expect(
                mount(
                    <Button
                        classes={{}}
                        onClick={() => log.info('This is the default button')}
                        text={'Default button'}
                    />
                )
            ).toMatchSnapshot();
        });
        it('should match snapshot with icon', () => {
            expect(
                mount(
                    <Button
                        classes={{}}
                        icon={IconRefresh}
                        onClick={() => log.info('This is a button with an icon')}
                        text={'Icon button'}
                    />
                )
            ).toMatchSnapshot();
        });
    });
});
