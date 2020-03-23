import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import { formatForChart } from 'util/chart.util';

const styles = {
    container: {
        width: '100%'
    }
};

export const WeatherChart = ({ classes, weatherData }) => (
    <div className={classes.container}>
        <LineChart
            label={'Temperature'}
            suffix={'°C'}
            colors={['#fff']}
            data={weatherData ? formatForChart(weatherData.entries) : []}
        />
    </div>
);

const mapStateToProps = state => ({
    weatherData: state.weather.weatherData
});

export default compose(connect(mapStateToProps), injectSheet(styles))(WeatherChart);
