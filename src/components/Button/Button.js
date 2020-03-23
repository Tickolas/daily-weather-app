import React from 'react';
import injectSheet from 'react-jss';
import 'chart.js';

const styles = {
    button: {}
};

export const Button = ({ classes, children, ...other }) => (
    <button className={classes.button} {...other}>
        {children}
    </button>
);

export default injectSheet(styles)(Button);
