// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract HystaCoin is ERC20, Ownable {
    uint constant _initial_supply = 100 * (10**18);
    constructor() ERC20('Hysta Coin', 'HYC') payable {
         _mint(msg.sender, _initial_supply);
    }
}
