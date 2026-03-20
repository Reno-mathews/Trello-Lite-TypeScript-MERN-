import axios from "axios";

const API = axios.create({
    baseURL: "http://loalhost:5000/api"
});

export default API;
