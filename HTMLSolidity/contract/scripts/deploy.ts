import { ethers } from "hardhat";

async function main() {
  const simpleFactory = await ethers.getContractFactory("Simple");
  const contract = await simpleFactory.deploy();
  await contract.deployed();
  console.log(`Deployed ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
