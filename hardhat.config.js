require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'YOUR_QUICKNODE_API_URL',
      accounts: ['YOUR_PRIVATE_GOERLI_ACCOUNT_KEY'],
    },
  },
};
