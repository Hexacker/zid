import config from "config";
import axios from "axios";

const ZidAPIPath = config.get("zidAPI");

const onRejected = (err) => {
  const errMessage =
    err.response && err.response.data
      ? err.response.data
      : "Could not get any response from the main wallet server";
  return Promise.reject(
    err && err.response && err.response.status
      ? err.response.status
      : "404 Not Found",
    errMessage
  );
};
export const ZidAPI = axios.create({
  baseURL: `${ZidAPIPath}/app/v1`,
  validateStatus: (status) => {
    return status >= 200 && status < 400; // default
  },
});
ZidAPI.interceptors.response.use((res) => res, onRejected);
