import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-my-burger-62bbd.firebaseio.com/"
});

export default instance;