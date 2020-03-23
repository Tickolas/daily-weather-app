import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    spinner: {
        width: 40,
        height: 40,
        background: 'linear-gradient(to bottom, #49a5bf 0%, #75bdd1 59%, #93cede 100%)',

        margin: 10,
        animation: '$sk-rotateplane 1.2s infinite ease-in-out'
    },
    '@keyframes sk-rotateplane': {
        '0%': {
            transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)'
        },
        '50%': {
            transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)'
        },
        '100%': {
            transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)'
        }
    }
};

export const Spinner = ({ classes }) => <div className={classes.spinner} />;

export default injectSheet(styles)(Spinner);
