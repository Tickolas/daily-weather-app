import React from 'react';
import { connect } from 'react-redux';
import { login } from 'actions/user.actions';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import Button from 'components/Button/Button';
import { getTodaysWeather } from 'actions/weather.actions';
import { IconRefresh } from 'icons/icons';

const styles = {
    header: {
        width: '100%',
        textAlign: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between'
    },

    refreshButton: {
        alignSelf: 'flex-end'
    }
};

export const Header = ({ classes, refresh }) => {
    return (
        <header className={classes.header}>
            <div />
            <span>Today's temperature</span>
            <Button className={classes.refreshButton} icon={IconRefresh} onClick={refresh} text={'Refresh'} />
        </header>
    );
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    refresh: () => dispatch(getTodaysWeather())
});

export default compose(connect(null, mapDispatchToProps), injectSheet(styles))(Header);
