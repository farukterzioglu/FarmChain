pragma solidity ^0.4.17;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract FarmChain is StandardToken{
  //StandardToken implemantations 
  string public name = "FarmChain";
  string public symbol = "FaCha";
  uint8 public decimals = 2;
  uint public INITIAL_SUPPLY = 100000000;

  //Farmchain implemantations  
  struct Farm{
    string UserName;
    address UserAddress;
    string FarmName;
    string Location;
  }

  mapping(address => Farm) farms;

  constructor() public {
    // StandardToken implemantations
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;

    //Farmchain implementations
  }

  //Events 
  event LogCreateNewFarm(string UserName, address UserAddress, string FarmName, string Location);

  //Public methods 
  function createNewFarm(string farmName, string location) external {
    //TODO : check and get user registration 
    string memory userName = "TODO";
    
    if(farms[msg.sender].UserAddress !=  address(0x0)) return;

    farms[msg.sender] = Farm(userName, msg.sender, farmName, location);
        
    emit LogCreateNewFarm(userName, msg.sender, farmName, location);    
  }
}