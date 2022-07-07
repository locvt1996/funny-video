import Axios from "axios";

// helpers
import { getCookie } from "../helpers/cookie";

const AppService = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
  params: {},
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  },
  withCredentials: false,
});

export default AppService;
