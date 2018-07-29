pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FarmChain.sol";
import "../contracts/Farm.sol";

contract TestFarmChain{
  //TODO : should create new farm   
  function testShouldCreateNewFarm() public {
    //Arrange 
    FarmChain farmChain = FarmChain(DeployedAddresses.FarmChain());

    // //Act
    address farmAddress = farmChain.createFarm("test farm", 1000);
    address farmMapping = farmChain.ownerToFarm(tx.origin);

    //Assert
    Assert.equal(farmMapping, farmAddress, 
      toAsciiString(tx.origin)
      // toAsciiString(farmAddress)
      // "createFarm should return address of created farm."
      );
  }

  function toAsciiString(address x) returns (string) {
    bytes memory s = new bytes(40);
    for (uint i = 0; i < 20; i++) {
        byte b = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        byte hi = byte(uint8(b) / 16);
        byte lo = byte(uint8(b) - 16 * uint8(hi));
        s[2*i] = char(hi);
        s[2*i+1] = char(lo);            
    }
    return string(s);
}

function char(byte b) returns (byte c) {
    if (b < 10) return byte(uint8(b) + 0x30);
    else return byte(uint8(b) + 0x57);
}
  //TODO : should check for name and total supply 

  //TODO : should get all farms 

  //TODO : should search by farm address

  //TODO : should be a valid erc20
}