import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 5000,
    headers: {
        Authorization: 'basic 8429a626-6eb7-4a06-add0-77ad58616841'
    }
});

export default instance;