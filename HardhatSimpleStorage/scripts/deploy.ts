import { ethers, network, run } from "hardhat";

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const SimpleStorageFactory = await SimpleStorage.deploy();
  const contract = await SimpleStorageFactory.deployed();
  // if (network.config.chainId === 5) {
  //   await SimpleStorageFactory.deployTransaction.wait(6);
  //   await verify(contract.address);
  // }
}

// async function verify(contractAddress: string, args?: Array<any>) {
//   console.log("Verifying Contract....");
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args
//     });
//   } catch (err: unknown) {
//     console.log(err);
//   }
// }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
