var FarmCoin = artifacts.require("FarmCoin");

module.exports = function(deployer){
    deployer.deploy(FarmCoin);
}