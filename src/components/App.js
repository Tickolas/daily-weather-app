import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from 'actions/user.actions';
import { compose } from 'redux';
import injectSheet from 'react-jss';

const styles = {
    app: {
        textAlign: 'center'
    },

    header: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    },

    link: {
        color: '#61dafb'
    }
};

export const App = ({ classes, login }) => {
    useEffect(() => {
        login();
    }, [login]);

    return (
        <div className={classes.app}>
            <header className={classes.header}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className={classes.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login())
});

export default compose(connect(null, mapDispatchToProps), injectSheet(styles))(App);
