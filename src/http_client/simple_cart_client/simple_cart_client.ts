import { axiosClient } from "../global";

const SimplePromoCartClient = (() => {
  let _headers: object = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Basic " + process.env.SIMPLE_CART_KEY
  };
  return axiosClient(process.env.SIMPLE_CART_URL, _headers);
})();

export default SimplePromoCartClient;
