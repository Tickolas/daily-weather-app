import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import Spinner from 'components/LoadingModal/Spinner';

const styles = {
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingModal: {
        border: [1, 'solid', 'gray'],
        borderRadius: 5,
        backgroundColor: 'white',
        height: 120,
        width: 240,
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export const LoadingModal = ({ classes, isLoading }) => (
    <>
        {isLoading && (
            <div className={classes.overlay}>
                <div className={classes.loadingModal}>
                    <Spinner /> Loading...
                </div>
            </div>
        )}
    </>
);

const mapStateToProps = state => ({
    isLoading: state.app.isLoading
});

export default compose(connect(mapStateToProps), injectSheet(styles))(LoadingModal);
