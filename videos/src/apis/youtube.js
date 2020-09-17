import axios from 'axios';

const KEY = 'AIzaSyDcCMjy_mK4gWMR7v24x-lkw18kyCM3GiE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});