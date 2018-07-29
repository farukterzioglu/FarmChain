var FarmChain = artifacts.require("FarmChain");

contract('FarmChain', function(accounts) {
  it("should create new farm", function() {
    return FarmChain.deployed().then(function(instance) {
      return instance.createFarm.call("test", 1000);
    }).then(function(farmAddress) {
      console.log(farmAddress);
      // assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });

  // it("should return created farm", function() {
  //   return FarmChain.deployed().then(function(instance) {
  //     return instance.ownerToFarm(accounts[0]);
  //   }).then(function(farmAddress) {
  //     console.log(farmAddress);
  //   });
  // });
});