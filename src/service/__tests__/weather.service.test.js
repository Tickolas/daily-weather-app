import * as WeatherService from 'service/weather.service';
import axios from 'axios';

jest.mock('axios');

describe('WeatherService', () => {
    describe('getTodaysWeather', () => {
        it('should return a token if successful', async () => {
            const mockResponse = { token: 'mock token' };
            axios.post.mockResolvedValue(mockResponse);

            const todaysWeather = await WeatherService.getTodaysWeather();

            expect(todaysWeather).toEqual(mockResponse);
        });

        it('should return a mock if failed', async () => {
            axios.post.mockImplementation(() => {
                throw new Error('Expected to fail');
            });

            const todaysWeather = await WeatherService.getTodaysWeather();

            expect(todaysWeather).toEqual(WeatherService.weatherDataMock);
        });
    });
});
