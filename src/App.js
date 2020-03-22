import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { login } from 'actions/user.actions';

const App = ({ login }) => {
    useEffect(() => {
        login();
    }, [login]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login())
});

export default connect(null, mapDispatchToProps)(App);
