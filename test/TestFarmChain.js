var FarmChain = artifacts.require("FarmChain");
var Farm = artifacts.require("Farm");

contract('farmChain.createFarm', function([account]) {
  let farmChain;

  beforeEach('setup contract for each test', async function () {
      farmChain = await FarmChain.new();
  })

  it("should create new farm", function() {
    farmChain.createFarm("test", 1000).then(async function (transactionHash) {
      var farm = await farmChain.ownerToFarm.call(account);
      console.log({farm : farm}); //TODO : assert that farm isn't 0x000000...
      });
    });

  it("should create the farm as a valid ERC20", function() {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var name = await farm.name.call();
      console.log({name}); //TODO : assert name is equal
    });
  });

  it("should get totalSupply of Farm", function() {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var totalSupply = await farm.totalSupply.call();
      console.log({ expected : 1000, totalSupply : totalSupply.toNumber()}); //TODO : assert
    });
  });

  it("should get balance of Farm", async function() {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var balance = await farm.balanceOf(account);
      console.error({ expected : 1000, balance : balance.toNumber()}); //TODO : assert
    });
  });

  it("should set farm's owner correctly", () => {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var farmOwner = await farm.owner.call();

      console.log({ expected : account, farmOwner : farmOwner }); //TODO : assert 
    });
  });

  it("should create farm through another contract", () => {});

  it("should get new farm", function() {
    return FarmChain.deployed().then(async function(instance) {
    })
  });

  it("should transfer from Farm", () => {})

  it("should fail multiple farm with one account", () => {});

  it("should allow owner to withdraw Ethereum|FarmCoin", () => {});

  it("should fail without name", async function() {
    return FarmChain.deployed().then(async function(instance) {
      // await expectThrow(await instance.createFarm.call("", 1000));
    })
  });
});