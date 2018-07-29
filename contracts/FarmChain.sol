pragma solidity ^0.4.24;

import "./Farm.sol";

contract FarmChain{
  mapping(address => address) public ownerToFarm;

  event farmCreated(address farm, string name,uint256 totalSupply); //indexed
  event test(address q1, address q2);

  function createFarm(string _name,uint256 _totalSupply) external returns (address){
    require(_totalSupply > 0, "Total supply should be bigger than 0");
    require(bytes(_name) .length != 0, "Name is required!"); //TODO : Fails, fix this 
    
    require(ownerToFarm[msg.sender]==address(0));

    Farm farm = new Farm(_name, _totalSupply, msg.sender);
    ownerToFarm[msg.sender] = address(farm);

    emit farmCreated(address(farm), farm.name(), farm.totalSupply() );
    emit test(address(farm),ownerToFarm[msg.sender]);
    
    return address(farm);
  }
}