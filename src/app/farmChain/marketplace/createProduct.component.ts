import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { MarketPlaceService } from "../marketPlace.service";
import { User } from "../models/user";
import { Farm } from "../models/farm";
import { Product } from "../models/product";

@Component({
  selector: '[createproduct]',
  templateUrl: './createProduct.component.html'
})
export class CreateProductComponent {   
  //TODO : get farm id 
  farmId : number;

  title : string;
  price : number;

  public constructor(private farmChainService : FarmChainService){

    console.log("createProduct init..."); 
  }

  public createProduct(){
    let product : Product = {
      ProductId : 1,
      ProductType : "string",
      ProductName : "string"
     };
      console.log(product);
    // this.farmChainService.createFarm(product);
  }
}