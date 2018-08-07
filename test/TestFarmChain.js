/// <reference path="../node_modules/jasmine/lib/jasmine.js" />
/// <reference path="../node_modules/chai/chai.js" />
/// <reference path="../node_modules/chai/lib/chai.js" />
/// <reference path="../node_modules/chai/lib/chai/assertion.js" />

var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

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
      assert.notEqual(farm, "0x0000000000000000000000000000000000000000");
      });
    });

  it("should create the farm as a valid ERC20", function() {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var name = await farm.name.call();
      assert.equal(name, "test farm", "name is not correct");
    });
  });

  it("should get totalSupply of Farm", function() {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var totalSupply = await farm.totalSupply.call();
      assert.equal(totalSupply.toNumber(), 1000, "total balance is not correct");
    });
  });

  it("should get balance of Farm", async function() {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var balance = await farm.balanceOf(account);
      assert.equal(balance.toNumber(), 1000, "balance should be 1000");
    });
  });

  it("should set farm's owner correctly", () => {
    farmChain.createFarm("test farm", 1000).then(async function (transactionHash) {
      var contractAddress = await farmChain.ownerToFarm.call(account);
      var farm = Farm.at(contractAddress);

      var farmOwner = await farm.owner.call();
      assert.equal(account, farmOwner, "accounts should match");
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