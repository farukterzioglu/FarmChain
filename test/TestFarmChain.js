var FarmChain = artifacts.require("FarmChain");
var Farm = artifacts.require("Farm");

contract('FarmChain', function([owner]) {
  let farmCain;

  beforeEach('setup contract for each test', async function () {
      farmCain = await FarmChain.new();
  })

  it("should create new farm", function() {
    farmCain.createFarm("test", 1000).then(async function (transactionHash) {
      // console.log(transactionHash); // useful for tracking
      var farm = await farmCain.ownerToFarm.call(owner);
      //TODO : assert that farm isn't 0x000000...
      console.log({farm});
      });
    });

    //TODO : Fails, can not create contract from address
  it("should create the farm as a valid ERC20", function() {
    farmCain.createFarm("test", 1000).then(async function (transactionHash) {
      var contractAddress = await farmCain.ownerToFarm.call(owner);
      console.log({contractAddress});
      
      console.log({Farm});
      
      var FarmContract = web3.eth.contract(Farm);
      console.log({FarmContract});
      
      var contractInstance = FarmContract.at(contractAddress);
      // console.log({contractInstance});


      
      // var contractInstance = Farm.new({from: result})
      // console.log({contractInstance});
      
      // var temp = new web3.eth.Contract(Farm, result);
      // console.log(temp);
    });
  });

  it("should get new farm", function() {
    return FarmChain.deployed().then(async function(instance) {
    })
  });

  // it("should fail multiple farm with one account", async function() {};
  // it("should fail without name", async function() {
  //   return FarmChain.deployed().then(async function(instance) {
  //     await expectThrow(await instance.createFarm.call("", 1000));
  //   })
  // });
});


// toNumber