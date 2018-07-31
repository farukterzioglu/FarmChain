module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "5777"
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    }
  }
};
