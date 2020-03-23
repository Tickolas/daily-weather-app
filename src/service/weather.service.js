import axios from 'axios';
import { warn } from 'loglevel';

export async function getTodaysWeather() {
    try {
        return await axios.post('qql', {
            query:
                '{me{home(id:"a8c210fc-2988-4f06-9fe9-ab1bad9529d5"){weather{minTemperature,maxTemperature,entries{time,temperature,type}}}}}'
        });
    } catch (e) {
        warn(`Failed to fetch weather data with error ${e}. Returning mock data instead.`);
        return weatherDataMock;
    }
}

export const weatherDataMock = {
    data: {
        me: {
            home: {
                weather: {
                    minTemperature: -5.9,
                    maxTemperature: 3.8,
                    entries: [
                        {
                            time: '2020-03-22T00:00:00+01:00',
                            temperature: -3,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T01:00:00+01:00',
                            temperature: -3.5,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T02:00:00+01:00',
                            temperature: -3.9,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T03:00:00+01:00',
                            temperature: -5.1,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T04:00:00+01:00',
                            temperature: -5.5,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T05:00:00+01:00',
                            temperature: -5.8,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T06:00:00+01:00',
                            temperature: -5.9,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T07:00:00+01:00',
                            temperature: -4.9,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T08:00:00+01:00',
                            temperature: -2.3,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T09:00:00+01:00',
                            temperature: -0.2,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T10:00:00+01:00',
                            temperature: 1.5,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T11:00:00+01:00',
                            temperature: 2.6,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T12:00:00+01:00',
                            temperature: 3.3,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T13:00:00+01:00',
                            temperature: 3.5,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T14:00:00+01:00',
                            temperature: 3.8,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T15:00:00+01:00',
                            temperature: 3.8,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T16:00:00+01:00',
                            temperature: 3.2,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T17:00:00+01:00',
                            temperature: 2.3,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T18:00:00+01:00',
                            temperature: 0.9,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T19:00:00+01:00',
                            temperature: -0.3,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T20:00:00+01:00',
                            temperature: -0.7,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T21:00:00+01:00',
                            temperature: -0.8,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T22:00:00+01:00',
                            temperature: -0.8,
                            type: 'sun'
                        },
                        {
                            time: '2020-03-22T23:00:00+01:00',
                            temperature: -0.8,
                            type: 'sun'
                        }
                    ]
                }
            }
        }
    }
};
