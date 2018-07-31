pragma solidity ^0.4.24;

import "./openzeppelin-solidity/contracts/token/ERC20/BasicToken.sol";
import "./openzeppelin-solidity/contracts/ownership/Ownable.sol";   
import "./openzeppelin-solidity/contracts/ownership/Contactable.sol";   

contract Farm  is BasicToken, Ownable, Contactable {
  string public name ;
  string public symbol;
  uint8 public decimals = 0;

  constructor(string _name,uint256 _totalSupply, address _owner) public {
    require(_owner != address(0), "Owner address is required!");
    require(bytes(_name).length != 0, "Name is required!");
    require(_totalSupply > 0, "Total supply should be bigger than 0");
    
    name = _name;
    totalSupply_ = _totalSupply;
    balances[msg.sender] = _totalSupply;
    
    //TODO : ???
    // balances[_owner] = _totalSupply;
    // transferOwnership(_owner);
  }

  /**
   * @dev payable fallback
   */
  function () external payable {}

  //TODO : ICO like logics, need to distrubute token exchenge FarmCoin
  //TODO : Check sent FarmCoin and distrubute share

  //TODO : SplitPayment, Claiming Payments

  //TODO : Withdraw logic 
}