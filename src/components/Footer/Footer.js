import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import { calculateWeatherType, getWeatherTypeIcon } from 'util/weather.util';
import { UNKNOWN } from 'constants/weathertypes.constant';

const styles = {
    footer: {
        width: '100%',
        textAlign: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        border: [1, 'solid', 'lightGray'],
        borderRadius: 5,
        marginTop: 8,
        padding: 8
    },

    minMax: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 16
    },

    weatherIcon: {
        width: 40,
        height: 40,
        padding: 4,
        margin: 4,
        border: [1, 'solid', 'gray'],
        borderRadius: 5
    }
};

export const Footer = ({ classes, weatherData }) => {
    const weatherType = weatherData ? calculateWeatherType(weatherData.entries) : UNKNOWN;

    return (
        <footer className={classes.footer}>
            <div className={classes.minMax}>
                <div>Min: {weatherData ? weatherData.minTemperature : '-'}°C</div>
                <div>Max: {weatherData ? weatherData.maxTemperature : '-'}°C</div>
            </div>
            <div>
                <img className={classes.weatherIcon} src={getWeatherTypeIcon(weatherType)} alt={weatherType} />
            </div>
        </footer>
    );
};

const mapStateToProps = state => ({
    weatherData: state.weather.weatherData
});

export default compose(connect(mapStateToProps), injectSheet(styles))(Footer);
