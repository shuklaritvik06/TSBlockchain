import { ABI, Address } from "./constants.js";
import { ethers } from "./ethers.js";
let contract;
const connectButton = document.getElementById("connect");
const number = document.getElementById("number");
const calc = document.getElementById("calc");
async function connect() {
  try {
    if (typeof window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      contract = new ethers.Contract(Address, ABI, signer);
      connectButton.innerHTML = "Connected";
    }
  } catch (err) {
    console.log(err);
  }
}

connectButton.addEventListener("click", connect);
calc.addEventListener("click", async () => {
  const num = number.value;
  const result = await contract.getResult(num);
  console.log(result.toString());
});
