import { Component, OnInit } from '@angular/core';
import { MarketPlaceService} from "../marketPlace.service";
import { Product } from "../models/product";

@Component({
  selector: '[marketplace]',
  templateUrl: './marketplace.component.html'
})
export class MarketplaceComponent { 
  ProductList : Product[] = new Array();

  public constructor(private marketPlaceService : MarketPlaceService){
    console.log("Marketplace init...");
    
    this.marketPlaceService.initializeContract().then( () => {
      this.getProductList();
    });
  }

  public async getProductList() : Promise<void> {
    this.ProductList = new Array<Product>();

    var count = await this.marketPlaceService.getProductCount();
    console.log(count.toString());

    for (let index = count - 1 ; index >= 0; index--) {
      const farm = await this.marketPlaceService.getProduct(index);
      console.log(farm);
      
      this.ProductList.push(farm);
    }
    console.log(this.ProductList); 
  }
}