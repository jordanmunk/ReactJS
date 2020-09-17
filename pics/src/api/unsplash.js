import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MH5e5Bg7KNCpdQkQBxbljZtuuEH8cUzBM_DdDjv8zwk'
    }
});