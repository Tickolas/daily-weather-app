import React from 'react';
import injectSheet from 'react-jss';
import 'chart.js';
import classnames from 'classnames';

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        fontSize: 16,
        borderRadius: 50,

        '&:focus': {
            outline: 0
        }
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8
    }
};

export const Button = ({ classes, children, text, icon, alt, className, ...other }) => (
    <button className={classnames(classes.button, className)} {...other}>
        {icon && <img className={classes.icon} src={icon} alt={alt} />}
        {text}
    </button>
);

export default injectSheet(styles)(Button);
