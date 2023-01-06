import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import { config as dotenv } from "dotenv";
dotenv();
const URL = process.env.RPC_URL;
const ACCOUNT_ONE = process.env.ACCOUNT_ONE;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  networks: {
    goerli: {
      url: URL,
      chainId: 5,
      accounts: [ACCOUNT_ONE as string]
    }
  }
};

export default config;
