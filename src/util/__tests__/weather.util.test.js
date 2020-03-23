import { calculateWeatherType } from 'util/weather.util';
import { CLOUD, RAIN, SNOW, SUN, UNKNOWN } from 'constants/weathertypes.constant';

describe('WeatherUtil', () => {
    describe('calculateWeatherType', () => {
        it('should handle an empty array', () => {
            const result = calculateWeatherType([]);

            expect(result).toEqual(UNKNOWN);
        });
        it('should handle a day with equal weather', () => {
            const result = calculateWeatherType([{ type: SUN }, { type: CLOUD }, { type: RAIN }]);

            expect(result).toEqual(UNKNOWN);
        });
        it('should handle a sunny day', () => {
            const result = calculateWeatherType([{ type: SUN }, { type: SUN }, { type: RAIN }]);

            expect(result).toEqual(SUN);
        });
        it('should handle a cloudy day', () => {
            const result = calculateWeatherType([{ type: SUN }, { type: CLOUD }, { type: CLOUD }]);

            expect(result).toEqual(CLOUD);
        });
        it('should handle a rainy day', () => {
            const result = calculateWeatherType([{ type: RAIN }, { type: RAIN }, { type: CLOUD }]);

            expect(result).toEqual(RAIN);
        });
        it('should handle a snowy day', () => {
            const result = calculateWeatherType([{ type: SNOW }, { type: RAIN }, { type: SNOW }]);

            expect(result).toEqual(SNOW);
        });
    });
});
