import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-69c02/us-central1/api' //the API (cloud function) URL
});

export default instance;