import { task } from "hardhat/config";
task("blocknum")
  .setDescription("Get current block num")
  .setAction(async (taskArgs, hre) => {
    const blocknum: number = await hre.ethers.provider.getBlockNumber();
    console.log(blocknum);
  });
