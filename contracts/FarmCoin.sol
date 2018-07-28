pragma solidity ^0.4.24;

import "./openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract FarmCoin is StandardToken {
  string public name = "FarmCoin";
  string public symbol = "FRMC";
  uint8 public decimals = 2;
  uint public INITIAL_SUPPLY = 2000000;  

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}