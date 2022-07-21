import {HardhatUserConfig} from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const INFURA_PROJECT_ID = '05418408b9474fb387f8e3b193cd7cc3';
const ROBSTEN_PRIVATE_KEY =
  'd01769783ce541ca4c9719bd8afbf7bd43345f51990e1985a304ef8488ad137d';

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${ROBSTEN_PRIVATE_KEY}`],
    },
  },
};

export default config;
