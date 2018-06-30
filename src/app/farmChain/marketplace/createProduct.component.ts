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
  imageLink : string;

  public constructor(private farmChainService : FarmChainService){
    console.log("createProduct init..."); 
  }

  public createProduct(){
    let product : Product = {
      Id : 1,
      Type : "string",
      Name : this.title,
      Price : this.price,
      ImageLink : this.imageLink
     };
      console.log(product);
    // this.farmChainService.createFarm(product);
  }

  getTitle(term : string): void {
    this.title = term;
  }

  getPrice(term : number): void {
    this.price = term;
  }

  getImageLink(term : string): void {
    this.imageLink = term;
  }
}