// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";


contract HystaCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20('Hysta Coin', 'HYC') {
        _mint(msg.sender, initialSupply);
    }
}
