import axios from "axios";

const api = axios.create({
    baseURL:"https://vehicleecom.onrender.com/api"
})

export default api;