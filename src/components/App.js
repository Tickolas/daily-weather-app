import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from 'actions/user.actions';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import WeatherChart from 'components/WeatherChart/WeatherChart';

const styles = {
    app: {
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #49a5bf 0%,#75bdd1 59%,#93cede 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    },

    header: {}
};

export const App = ({ classes, login }) => {
    useEffect(() => {
        login();
    }, [login]);

    return (
        <div className={classes.app}>
            <header className={classes.header}>Today's temperature</header>
            <WeatherChart />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login())
});

export default compose(connect(null, mapDispatchToProps), injectSheet(styles))(App);
