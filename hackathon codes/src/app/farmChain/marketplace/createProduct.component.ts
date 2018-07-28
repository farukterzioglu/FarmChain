import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { MarketPlaceService } from "../marketPlace.service";
import { Product } from "../models/product";

@Component({
  selector: '[createproduct]',
  templateUrl: './createProduct.component.html'
})
export class CreateProductComponent {
  title : string;
  price : string;
  imageLink : string;
  farmName: string;

  public constructor(private marketPlaceService : MarketPlaceService){
    console.log("CreateProduct component init..."); 
    this.marketPlaceService.initializeContract().then( () => {});
  }

  public createProduct(){
    let product : Product = {
      Id : 1,
      Name : this.title,
      Price : this.price,
      ImageLink : this.imageLink,
      FarmName : this.farmName
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

  getFarmName(term : string): void {
    this.farmName = term;
  }
}