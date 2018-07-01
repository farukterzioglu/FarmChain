pragma solidity ^0.4.17;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract MarketPlace {
  //MarketPlace implemantations  
  struct Product{
    string Name;
    string Price;
    string ImageLink;
    string FarmName;
  }
  
  uint productCount = 0;
  mapping(uint => Product) products;
  mapping(uint => address) productToOwner; 
  // mapping(address => unit[]) 
  constructor() public {}

  //Events 
  event LogCreateNewProduct(string productName, string price, string imageLink, address sender, string farmName);    

  //Public methods 
  function createNewProduct(string productName, string price, string imageLink, string farmName) external {
    products[productCount] = Product({ Name : productName, Price : price, ImageLink : imageLink, FarmName : farmName});
    productToOwner[productCount] = msg.sender;

    productCount++;

    emit LogCreateNewProduct(productName, price, imageLink, msg.sender, farmName);    
  }

  function getproduct(uint id) public view returns (string Name, string Price, string ImageLink, string FarmName) {
      Product memory farm = products[id];
      return (farm.Name , farm.Price, farm.ImageLink, farm.FarmName); 
  }

  function getProductCount() external view returns(uint){
      return productCount;
  }
}