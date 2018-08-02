var FarmChain = artifacts.require("FarmChain");
var Farm = artifacts.require("Farm");

contract('FarmChain', function([account]) {
  let farmChain;

  beforeEach('setup contract for each test', async function () {
      farmChain = await FarmChain.new();
  })

  it("should create new farm", function() {
    farmChain.createFarm("test", 1000).then(async function (transactionHash) {
      // console.log(transactionHash); // useful for tracking
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

      { //banging my head to the wall.... notes -> 
      // var farm = await farmCain.getFarm.call(contractAddress);
      
      // console.log({contractAddress});
      // console.log({farm});
      
      // farm = Farm.at(contractAddress);

      // var name =await farm.name.call();
      // console.log({name});
      
      // console.log({contractAddress});
      
      // console.log({Farm});
      
      // var FarmContract = web3.eth.contract(Farm);
      // console.log({FarmContract});
      
      // var contractInstance = FarmContract.at(contractAddress);
      // console.log({contractInstance});


      
      // var contractInstance = Farm.new({from: result})
      // console.log({contractInstance});
      
      // var temp = new web3.eth.Contract(Farm, result);
      // console.log(temp);
      }
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

  it("should create farm through a contrect", () => {});

  it("should get new farm", function() {
    return FarmChain.deployed().then(async function(instance) {
    })
  });

  it("addresses", async function() {
    var farmChaincreator = await farmChain.creator.call();

    var farmCainTemp = farmChain;
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var farmCreator = await farm.creator.call();
      var farmFutureOwner = await farm.owner2.call();
      var farmOwner = await farm.owner.call();

      console.log({
        account : account, 
        farmChainAddress : farmCainTemp.contract.address,
        farmChainCreator : farmChaincreator,
        farmAddress : contractAddress, 
        farmCreator : farmCreator, 
        farmOwner : farmOwner,
        farmFutureOwner : farmFutureOwner
        });
    });
  });

  // it("should fail multiple farm with one account", async function() {};
  // it("should fail without name", async function() {
  //   return FarmChain.deployed().then(async function(instance) {
  //     await expectThrow(await instance.createFarm.call("", 1000));
  //   })
  // });
});


// toNumber