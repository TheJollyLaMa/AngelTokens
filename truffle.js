module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      from: "0xc264efeD9e9983E3992ee8270D3A3bf9306E9f31" //dummy account in ganache for now but should be set to the angel deployer wallet for mainnet deployment
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',
  compilers: {
    solc: {
      version: "^0.6.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
