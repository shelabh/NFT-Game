require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9cAV3-tt89MOPHgf_aAyYDQWAeiMixJQ',
      accounts: ['53243a2584ae3694d91e57a93caf707a8d47a62701f96d1a9be68ac7e763aff7'],
    },
  },
};
