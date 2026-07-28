// api.js
import axios from "axios";

const api = axios.create({
    // baseURL: "https://medication-tracker-gu1i.onrender.com",
    // baseURL: "http://localhost:8080",
    baseURL: "https://medication-tracker-xphw.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
