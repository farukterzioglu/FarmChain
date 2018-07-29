var FarmCoin = artifacts.require("FarmCoin");
var FarmChain = artifacts.require("FarmChain");

module.exports = function(deployer){
    deployer.deploy(FarmCoin);
    deployer.deploy(FarmChain);
}