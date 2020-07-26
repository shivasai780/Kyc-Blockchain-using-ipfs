const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const buildpath = path.resolve(__dirname, "build"); //gives the full path
fs.removeSync(buildpath);
console.log(__dirname);
const contractpath = path.resolve(__dirname, "contracts", "kyc.sol");
const source = fs.readFileSync(contractpath, "utf-8");
const output = solc.compile(source, 1).contracts;
fs.ensureDirSync(buildpath);

for (let contract in output) {
  console.log(contract);
  fs.outputJsonSync(
    path.resolve(buildpath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
