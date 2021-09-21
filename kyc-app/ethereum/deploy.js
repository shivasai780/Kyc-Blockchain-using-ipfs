const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const Kyc = require("./build/Kyc.json");
const provider = new HDWalletProvider(
  "Keep your phasphrase",
  " https://rinkeby.infura.io/v3/51223dfaae564927b29e609d0705fa12"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(Kyc.interface))
    .deploy({ data: "0x" + Kyc.bytecode })
    .send({ from: accounts[0] });
  console.log("stored at" + result.options.address);
  return;
};
deploy();
