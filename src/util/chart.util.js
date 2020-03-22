import moment from 'moment';

export function formatForChart(weatherEntries) {
    const formatted = {};

    weatherEntries.forEach(entry => (formatted[moment(entry.time).format('HH:mm')] = `${entry.temperature}°C`));

    return formatted;
}
