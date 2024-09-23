import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://coca-backend-d5c95f16df8d.herokuapp.com",
  timeout: 20000, // Set timeout to 10 seconds
  headers: {
    // "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 ||
        error.response.data.message === "Token not provided" ||
        error.response.data.message === "Authentication token is not valid")
    ) {
      localStorage.clear();
      // window.location.reload();
    }
    return Promise.reject(error.response);
  }
);

export default instance;
