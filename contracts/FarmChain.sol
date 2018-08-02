pragma solidity ^0.4.24;

import "./Farm.sol";

contract FarmChain{
  mapping(address => address) public ownerToFarm;

  address creator_; 

  event farmCreated(address farm, string name,uint256 totalSupply); //indexed ???

  constructor() public {
    creator_ = msg.sender;
  }

  function createFarm(string _name,uint256 _totalSupply) public {
    require(_totalSupply > 0, "Total supply should be bigger than 0");
    require(bytes(_name).length != 0, "Name is required!"); //TODO : Fails, fix this 
    require(ownerToFarm[msg.sender]==address(0));

    Farm farm = new Farm(_name, _totalSupply, msg.sender);
    ownerToFarm[msg.sender] = address(farm);

    emit farmCreated(address(farm), farm.name(), farm.totalSupply() );
    
    uint256 balance = farm.balanceOf(msg.sender);
    // require(balance == farm.totalSupply(), "Balance didn't set correctly!" ); //TODO : Assert ???
  }
  
  function creator() public view returns (address){
    return creator_;
  }

  function getFarm(address farmAddress) public returns (Farm){
    Farm con = Farm(farmAddress);
    return con;
  }
  //TODO : Payable logic 
}