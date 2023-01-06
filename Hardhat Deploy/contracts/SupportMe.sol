// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract SupportMe {
    function sendMoney(address reciever, uint256 balance) public payable {
        payable(reciever).transfer(balance);
    }
}
