// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract Simple {
    constructor() {}

    function getResult(uint256 c) public pure returns (uint256) {
        uint256 a = 1;
        uint256 b = 2;
        uint256 result = a + b + c;
        return result;
    }
}
