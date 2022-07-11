// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract HystaNonFungCoin is ERC721URIStorage  {
    uint256 public Id;
    mapping (address => uint256) public HNFtrack;
    
    constructor() ERC721("HystaNonFungCoin", "HYNC") payable  {
        Id = 0;
    }

    // createNFT
    function createNft (address reciever, string calldata metadata) external returns (uint256) {
        Id++;
        _mint(reciever, Id);
        _setTokenURI(Id, metadata);
        HNFtrack[reciever] = Id;
        return Id;
    }
}