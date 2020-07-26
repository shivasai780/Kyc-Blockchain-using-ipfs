import web3 from "./web3";
import kyc from "./build/Kyc.json";
const instance = new web3.eth.Contract(
  JSON.parse(kyc.interface),
  "0xdb3a2D05bF82680FC55C77D88a13B42674b939Cb"
);
export default instance;
