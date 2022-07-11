import {loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat"

describe('HystaCoin is being tested', () => {
 it('HystaCoin should be deployed', async () => {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('HystaCoin');
    const hardhatToken = await Token.deploy();

    
  });
})