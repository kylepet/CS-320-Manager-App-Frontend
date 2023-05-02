// import { URL_API_ADMIN } from "config/index";
import axios from "axios";
import Cookies from "js-cookie";
// import { getCookie } from 'cookies-next';

// const TOKEN_BEARER = getCookie("access_token");
const TOKEN_BEARER = Cookies.get("access_token");

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TOKEN_BEARER}`,
  },
});
