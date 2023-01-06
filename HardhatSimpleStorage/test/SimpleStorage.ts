import { assert } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";
describe("Simple Storage Contract Tests", () => {
  let simpleStorage: SimpleStorage;
  let simpleStorageFactory: SimpleStorage__factory;
  beforeEach(async () => {
    simpleStorageFactory = (await ethers.getContractFactory(
      "SimpleStorage"
    )) as SimpleStorage__factory;
    simpleStorage = await simpleStorageFactory.deploy();
  });
  it("Should Start With Number 0", async () => {
    let num = await simpleStorage.retrieve();
    assert(num.toString() === "0", "Value is not 0");
  });
});
