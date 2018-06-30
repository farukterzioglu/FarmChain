import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { MarketPlaceService } from "../marketPlace.service";
import { Product } from "../models/product";

@Component({
  selector: '[createproduct]',
  templateUrl: './createProduct.component.html'
})
export class CreateProductComponent {   
  //TODO : get farm id 
  farmId : number;

  title : string;
  price : string;
  imageLink : string;

  public constructor(private marketPlaceService : MarketPlaceService){
    console.log("CreateProduct component init..."); 
    this.marketPlaceService.initializeContract().then( () => {

    });
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

      this.marketPlaceService.createProduct(product);
  }

  getTitle(term : string): void {
    this.title = term;
  }

  getPrice(term : string): void {
    this.price = term;
  }

  getImageLink(term : string): void {
    this.imageLink = term;
  }
}