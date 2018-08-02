pragma solidity ^0.4.24;

import "./Farm.sol";

contract FarmChain{
  mapping(address => address) public ownerToFarm;

  event farmCreated(address farm, string name,uint256 totalSupply); //farm : indexed ???

  constructor() public {}

  function createFarm(string _name,uint256 _totalSupply) public {
    require(_totalSupply > 0, "Total supply should be bigger than 0");
    require(bytes(_name).length != 0, "Name is required!"); //TODO : Fails, fix this 
    require(ownerToFarm[msg.sender]==address(0));

    Farm farm = new Farm(_name, _totalSupply, msg.sender);

    assert(farm.totalSupply() == _totalSupply); 
    assert(farm.balanceOf(msg.sender) == _totalSupply); 
    assert(farm.owner() == msg.sender);

    ownerToFarm[msg.sender] = address(farm);
    emit farmCreated(address(farm), farm.name(), farm.totalSupply() );
  }
  
  //TODO : Payable logic 
}