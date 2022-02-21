require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/b-KokcQfcWU681FYTxvnylnb3Ro_tjqu',
      accounts: [
        '6ebb25a38f2ef8839c78669edadf1e849497ffc2758ef9f106e9bdd834b2dfa6',
      ],
    },
  },
}