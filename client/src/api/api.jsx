import axios from "axios";

const api = axios.create({
    baseURL:"https://vehicleecom-sw46.onrender.com/api"
})

export default api;