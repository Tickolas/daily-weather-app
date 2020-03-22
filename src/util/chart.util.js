export function formatForChart(weatherEntries) {
    const formatted = {};

    weatherEntries.forEach(entry => (formatted[entry.time] = `${entry.temperature}°C`));

    return formatted;
}
