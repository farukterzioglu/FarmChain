pragma solidity ^0.4.17;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract MarketPlace {
  //MarketPlace implemantations  
  struct Product{
    string Type;
    string Name;
    string Price;
    string ImageLink;
  }
  
  uint productCount = 0;
  mapping(uint => Product) products;
  mapping(uint => address) productToOwner; 
  // mapping(address => unit[]) 
  constructor() public {}

  //Events 
  event LogCreateNewProduct(string productName, string productType, string price, string imageLink, address sender);    

  //Public methods 
  function createNewProduct(string productName, string productType, string price, string imageLink) external {
    products[productCount] = Product({ Type : productType, Name : productName, Price : price, ImageLink : imageLink});
    productToOwner[productCount] = msg.sender;

    productCount++;

    emit LogCreateNewProduct(productName, productType, price, imageLink, msg.sender);    
  }

  function getproduct(uint id) public view returns (string Type, string Name, string Price, string ImageLink) {
      Product memory farm = products[id];
      return (farm.Type, farm.Name , farm.Price, farm.ImageLink); 
  }

  function getProductCount() external view returns(uint){
      return productCount;
  }
}