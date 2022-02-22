require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: '',  //alchemy api url goes there
      accounts: [
        '',   //wallet secret phrase goes there
      ],
    },
  },
}
