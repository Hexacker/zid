// Importing Axios to let us make API calls easly and efficiently
// const axios = require("axios");
import axios from "axios";
import config from "config";
// import ZidAPI from "./axios";
// Declaring Zid API main URL as a constant since it will not change
const ZidAPI = "https://api.zid.dev/app/v1";

const Zid = async () => {
  console.log("XMANAGER ===> ", config.get("X-MANAGER-TOKEN"));
  const headers = {
    "X-MANAGER-TOKEN": config.get("X_MANAGER_TOKEN"),
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

const ZidTest = async () => {
  /*   const mangerToken = config.get("X_MANAGER_TOKEN");
  console.log("manger token ====> ", mangerToken); */
  /* const auth = config.get("Authorization"); */
  const headers = {
    "X-MANAGER-TOKEN": process.env.MANAGER_TOKEN,
    Authorization: "Bearer " + process.env.auth,
  };

  console.log("MANAGER ====> ", process.env.MANAGER_TOKEN);
  /*   const getAbandondCarts = await axios.get(
    `${ZidAPI}/managers/store/abandoned-carts`,
    headers,
    {
      params: { page: 1, page_size: 10, duration: 4 },
    }
  ); */
  /*     .then((result) => {
      console.log("DATAAA ===> ", result);
      if (result) {
        return result.data;
      } else {
        return "There was an error in retrieving abandont carts";
      }
    })
    .catch((err) => {
      return err;
    }); */
  try {
    const getAbandondCarts = await axios.get(
      `${ZidAPI}/managers/store/abandoned-carts`,
      {
        headers: headers,
        params: { page: 1, page_size: 10, duration: 4 },
      }
    );
    if (getAbandondCarts) {
      return getAbandondCarts.data;
    }
  } catch (error) {
    return error;
  }
  return getAbandondCarts.data;
};

// exports.Zid = Zid;
export default ZidTest;
