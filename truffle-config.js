module.exports = {
    networks: {
      celo: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*", // Match any network ID
        gas: 20000000, // Gas limit used for deploys
        gasPrice: 1000000000, // Gas price used for deploys
      },
    },
    compilers: {
      solc: {
        version: "0.8.0", 
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  };
  