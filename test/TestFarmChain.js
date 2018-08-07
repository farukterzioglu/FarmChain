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

contract('farmChain.createFarm', function(accounts) {
  let farmChain;
  let account = accounts[0];
  
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

  it("should transfer from Farm", () => {
    farmChain.createFarm("Test Farm", 1000).then(async () => {
      var farmContractAddress = await farmChain.ownerToFarm(account);
      var farm = Farm.at(farmContractAddress);

      await farm.transfer(accounts[1], 1000, { from: account }).then(async (trx) => {
        let afterBalance = -1;
        let account2Balance = -1;

        afterBalance = await farm.balanceOf(account);
        account2Balance = await farm.balanceOf(accounts[1]);

        assert.equal(afterBalance.toNumber(), 0, "balance of account 1 should be 1000");
        assert.equal(account2Balance.toNumber(), 1000, "balance of account 2 should be 1000");
      });
    });
  });

  it("should be able to transfer back", () => {
    farmChain.createFarm("Test Farm", 1000).then(async () => {
      var farmContractAddress = await farmChain.ownerToFarm(account);
      var farm = Farm.at(farmContractAddress);

      await farm.transfer(accounts[1], 1000, { from: account });
      
      await farm.transfer(account, 500, { from: accounts[1] }).then(async (trx) => {
        afterBalance = await farm.balanceOf(account);
        account2Balance = await farm.balanceOf(accounts[1]);

        assert.equal(afterBalance.toNumber(), 500, "balance of account 1 should be 1000");
        assert.equal(account2Balance.toNumber(), 500, "balance of account 2 should be 1000");
      });
    });
  });

  let tryCatch = require("./helpers/exceptions.js").tryCatch;
  let errTypes = require("./helpers/exceptions.js").errTypes;

  it("should fail multiple farm with one account", async () => {
    await farmChain.createFarm("Test Farm 1", 1000);
    await tryCatch(farmChain.createFarm("Test Farm 2", 100000), errTypes.revert);
  });

  it.skip("should allow owner to withdraw Ethereum|FarmCoin", () => {

  });

  it("should fail without name", async function() {
    await tryCatch(farmChain.createFarm("", 1), errTypes.revert);
  });
  
  it("should fail without total supply", async function() {
    await tryCatch(farmChain.createFarm("Test Farm", 0), errTypes.revert);
  });
});