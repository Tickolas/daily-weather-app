import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from 'actions/user.actions';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import WeatherChart from 'components/WeatherChart/WeatherChart';
import LoadingModal from 'components/LoadingModal/LoadingModal';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const styles = {
    app: {
        minHeight: '100vh',
        maxWidth: 800,
        padding: 8,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export const App = ({ classes, login }) => {
    useEffect(() => {
        login();
    }, [login]);

    return (
        <div className={classes.app}>
            <Header />
            <WeatherChart />
            <Footer />
            <LoadingModal />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login())
});

export default compose(connect(null, mapDispatchToProps), injectSheet(styles))(App);
