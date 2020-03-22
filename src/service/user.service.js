import axios from 'axios';

export async function login() {
    axios.defaults.baseURL = 'http://localhost:8088/http://app.tibber.com/v4/';

    return await axios.post('login.credentials', {
        email: 'demo@tibber.com',
        password: 'Electric'
    });
}
