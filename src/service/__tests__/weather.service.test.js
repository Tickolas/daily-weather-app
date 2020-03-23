import * as WeatherService from 'service/weather.service';
import axios from 'axios';

jest.mock('axios');

describe('WeatherService', () => {
    describe('getTodaysWeather', () => {
        it('should return weather data if successful', async () => {
            const mockResponse = { token: 'mock token' };
            axios.post.mockResolvedValue(mockResponse);

            const todaysWeather = await WeatherService.getTodaysWeather();

            expect(todaysWeather).toEqual(mockResponse);
        });
    });
});
