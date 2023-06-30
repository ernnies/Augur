const Market = artifacts.require("Market");
const Bet = artifacts.require("Bet");

module.exports = function (deployer) {
  deployer.deploy(Market).then(function () {
    return deployer.deploy(Bet, Market.address);
  });
};