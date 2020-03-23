import axios from 'axios';

export async function login() {
    return await axios.post('login.credentials', {
        email: 'demo@tibber.com',
        password: 'Electric'
    });
}
