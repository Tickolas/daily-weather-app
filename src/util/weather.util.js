import flatMap from 'lodash.flatmap';
import sumBy from 'lodash.sumby';
import { CLOUD, RAIN, SNOW, SUN, UNKNOWN } from 'constants/weathertypes.constant';
import { IconCloud, IconRain, IconSnow, IconSun, IconUnknownWeather } from 'icons/icons';

export function calculateWeatherType(entries) {
    const mapped = flatMap(entries, entry => entry.type);

    const sun = sumBy(mapped, entry => entry === SUN);
    const cloud = sumBy(mapped, entry => entry === CLOUD);
    const rain = sumBy(mapped, entry => entry === RAIN);
    const snow = sumBy(mapped, entry => entry === SNOW);

    if (sun > cloud && sun > rain && sun > snow) {
        return SUN;
    }
    if (cloud > sun && cloud > rain && cloud > snow) {
        return CLOUD;
    }
    if (rain > sun && rain > cloud && rain > snow) {
        return RAIN;
    }
    if (snow > sun && snow > cloud && snow > rain) {
        return SNOW;
    }
    return UNKNOWN;
}

export function getWeatherTypeIcon(weatherType) {
    switch (weatherType) {
        case SUN:
            return IconSun;
        case CLOUD:
            return IconCloud;
        case SNOW:
            return IconSnow;
        case RAIN:
            return IconRain;
        default:
            return IconUnknownWeather;
    }
}
