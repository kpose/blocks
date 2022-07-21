import {ethers} from 'hardhat';

async function main() {

  // const Lock = await ethers.getContractFactory('Lock');
  // const lock = await Lock.deploy(unlockTime, {value: lockedAmount});
  // await lock.deployed();
  // console.log('Lock with 1 ETH deployed to:', lock.address);

  // hysta coin
  const coin = await ethers.getContractFactory('HystaCoin');
  const hystaCoin = await coin.deploy();
  await hystaCoin.deployed();

  // hysta nft
  const nftcoin = await ethers.getContractFactory('HystaNonFungCoin');
  const hystaNftCoin = await nftcoin.deploy();
  await hystaNftCoin.deployed();

  console.log('Hysta coin deployed to:', hystaCoin.address);
  console.log('Hysta NFT deployed to:', hystaNftCoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
