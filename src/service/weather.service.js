import axios from 'axios';

export async function getTodaysWeather() {
    return await axios.post('gql', {
        query:
            '{me{home(id:"a8c210fc-2988-4f06-9fe9-ab1bad9529d5"){weather{minTemperature,maxTemperature,entries{time,temperature,type}}}}}'
    });
}
