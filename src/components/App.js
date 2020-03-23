import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from 'actions/user.actions';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import WeatherChart from 'components/WeatherChart/WeatherChart';
import Button from 'components/Button/Button';
import { getTodaysWeather } from 'actions/weather.actions';

const styles = {
    app: {
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #49a5bf 0%,#75bdd1 59%,#93cede 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        width: '100%',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between'
    }
};

export const App = ({ classes, login, refresh }) => {
    useEffect(() => {
        login();
    }, [login]);

    return (
        <div className={classes.app}>
            <header className={classes.header}>
                <span />
                <span>Today's temperature</span>
                <Button onClick={refresh}>Refresh</Button>
            </header>
            <WeatherChart />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    refresh: () => dispatch(getTodaysWeather())
});

export default compose(connect(null, mapDispatchToProps), injectSheet(styles))(App);
