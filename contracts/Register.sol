pragma solidity ^0.4.17;

contract RegisterContract{
  
  struct User{
      string UserName;
      string Address;
  }

  uint userCount = 0;
  mapping(uint => address) users;

  constructor() public {}

  //Events 
  event LogRegister(string userName, address userAddress);

  //Public methods 
  function register(string userName, address userAddress) external {
    users[++userCount] = userAddress;
       
    emit LogRegister(userName, userAddress);
  }
}