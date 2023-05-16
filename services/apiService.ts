import axios from "axios";
import Cookies from "js-cookie";
import {ACCESS_TOKEN_COOKIE_NAME} from "@/lib/consts";

const TOKEN_BEARER = Cookies.get(ACCESS_TOKEN_COOKIE_NAME);

export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: TOKEN_BEARER &&
      {
        Authorization: `Bearer ${TOKEN_BEARER}`,
      },
});
