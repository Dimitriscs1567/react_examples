import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4b92a.firebaseio.com/'
});

export default instance;