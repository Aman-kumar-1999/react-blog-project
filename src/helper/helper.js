// let baseUrl = 'https://api.eqipped.com'
// let baseUrl = 'http://3.7.147.110:5002'
// let baseUrl='http://codea2z.online:5002'

// test
// let baseUrl='http://localhost:8902'

// export default baseUrl;


import axios from "axios";
import { getToken } from "../auth";
// export const BASE_URL = "http://localhost:8902";
// export const BASE_URL = "http://35.154.97.243:8902";
export const BASE_URL = "https://api-xmlconvertor.up.railway.app";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin':"*",
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Replace with your actual access token
  },
});

// privateAxios.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     console.log("Axios Token : "+token)
//     if (token != null) {
//       config.headers.common.Authorization = `Bearer ${token}`;
//       console.log(config);
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
