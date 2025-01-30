import axios from "axios";

export const axiosClient = axios.create({
   baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});
// "http://localhost:8000/api"
// Interceptor to add the Authorization header to all requests
axiosClient.interceptors.request.use((config) => {
   const token = localStorage.getItem("ACCESS_TOKEN");
   //
   config.headers.Authorization = `Bearer ${token}`;
   return config
})

// Interceptor to handle the response`
axiosClient.interceptors.response.use((response) => {
   return response
}, (error) => { 
   try {
      const {response} = error;
      if(response.status === 401) {
         localStorage.removeItem("ACCESS_TOKEN");
      }
   }  catch(e) {
      console.log("Error in response interceptor: ", e);
   }
    // Return the rejected promise so error handlers can catch it
    return Promise.reject(error);
})
