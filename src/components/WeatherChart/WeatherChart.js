import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSheet from 'react-jss';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import { formatForChart } from 'util/chart.util';

const styles = {
    graph: {
        width: '80%'
    }
};

export const WeatherChart = ({ classes, weatherData }) => (
    <div className={classes.graph}>
        <LineChart
            label={'Temperature'}
            suffix={'°C'}
            colors={['#fff']}
            data={weatherData ? formatForChart(weatherData.entries) : []}
        />
    </div>
);

const mapStateToProps = state => ({
    weatherData: state.weather.weather
});

export default compose(connect(mapStateToProps), injectSheet(styles))(WeatherChart);
