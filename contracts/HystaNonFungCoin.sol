// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract HystaNonFungCoin is ERC721URIStorage  {
    uint32 public Id;
    mapping (address => uint32) public HNFtrack;
    
    constructor() ERC721("HystaNonFungCoin", "HYNC") payable  {
        Id = 0;
    }

    // createNFT
    function createNft (address reciever, string calldata metadata) external returns (uint32) {
        Id++;
        _mint(reciever, Id);
        _setTokenURI(Id, metadata);
        HNFtrack[reciever] = Id;
        return Id;
    }

    // transfer nft
    function transferNft(address sender, address reciever, uint32 transId, string calldata metadata) external {
        transferFrom(sender, reciever, transId);
        _setTokenURI(transId, metadata);
        delete HNFtrack[sender];
        HNFtrack[reciever] = Id;
    }
}