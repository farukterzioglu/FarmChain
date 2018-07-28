//Deploy FarmChain contract
var TutorialToken = artifacts.require("FarmChain");
module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
};

//Deploy Marketplace contract 
var MarketPlace = artifacts.require("MarketPlace");
module.exports = function(deployer) {
  deployer.deploy(MarketPlace);
};
