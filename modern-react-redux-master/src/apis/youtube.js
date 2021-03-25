import axios from 'axios';
const KEY = 'AIzaSyC7ETLTlDXxp2vM-c3VhoW16eLfoNFXAEM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})