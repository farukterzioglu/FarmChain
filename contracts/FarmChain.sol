pragma solidity ^0.4.17;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract FarmChain is StandardToken{
  string public name = "FarmChain";
  string public symbol = "FaCha";
  uint8 public decimals = 2;
  uint public INITIAL_SUPPLY = 100000000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}