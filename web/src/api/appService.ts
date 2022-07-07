import Axios from "axios";

const AppService = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
  params: {},
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default AppService;
