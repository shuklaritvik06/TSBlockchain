// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    mapping(address => uint256) name;
    address public owner;
    address[] public funders;

    // This will run on the contract deployment and it will init the owner with the addres of the sender address or the admin address
    constructor() public {
        owner = msg.sender;
    }

    // Interfaces compile down to ABI (Application Binary Interface) this is helpful to know how can the interaction with the contract be done
    function fund() public payable {
        require(msg.value > 1 ether, "You need to send more than 2 ether");
        uint256 amount = msg.value;
        name[msg.sender] += amount;
        funders.push(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only admin owner can withdraw");
        _;
    }

    function withdraw() public onlyOwner {
        // this allow transactions using max of 2300 gas
        payable(msg.sender).transfer(address(this).balance);
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            name[funder] = 0;
        }
        funders = new address[](0);
    }

    // function getVersion() public view returns (uint256) {
    //     AggregatorV3Interface priceFeed = AggregatorV3Interface(
    //         address(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419)
    //     );
    //     return priceFeed.version();
    // }

    // function gerPrice() public view returns (uint256) {
    //     AggregatorV3Interface priceFeed = AggregatorV3Interface(
    //         address(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419)
    //     );
    //     (, int256 answer, , , ) = priceFeed.latestRoundData();
    //     return uint256(answer);
    // }
}
