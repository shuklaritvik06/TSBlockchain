import { HardhatUserConfig } from "hardhat/config";
import { config as dotenv } from "dotenv";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/BlockNum";
dotenv();
const GOERLI_RPC_URL = process.env.GOERLI_RPC;
const ACCOUNT_ONE = process.env.ACCOUNT_ONE;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      accounts: [ACCOUNT_ONE as string],
      url: GOERLI_RPC_URL
    }
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    noColors: true,
    outputFile: "gas-report.txt",
    coinmarketcap: process.env.API_KEY
  }
};

export default config;
