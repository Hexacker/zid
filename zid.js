// Importing Axios to let us make API calls easly and efficiently
// const axios = require("axios");
import axios from "axios";
import config from "config";
// Declaring Zid API main URL as a constant since it will not change
const ZidAPI = "https://api.zid.dev/app/v1";

const Zid = async () => {
  console.log("XMANAGER ===> ", config.get("X-MANAGER-TOKEN"));
  const headers = {
    "X-MANAGER-TOKEN": config.get("X-MANAGER-TOKEN"),
    Authorization: config.get("Authorization"),
  };
  const getAbandondCarts = await axios
    .get(`${ZidAPI}/managers/store/abandoned-carts`, headers, {
      params: { page: 1, page_size: 10 },
    })
    .catch((err) => {
      return err;
    });

  if (getAbandondCarts) {
    return getAbandondCarts.data;
  } else {
    return "There was an error in retrieving abandont carts";
  }
};

// exports.Zid = Zid;
export default Zid;
