import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { Product } from "../models/product";
import { Farm } from "../models/farm";

@Component({
  selector: '[marketplace]',
  templateUrl: './marketplace.component.html'
})
export class MarketplaceComponent { 
  ProductList : Product[] = new Array();

  public constructor(private farmChainService : FarmChainService){
    console.log("Marketplace init...");
    
    this.farmChainService.initializeContract().then( () => {
      this.getFarmMarket();
    });
  }

  public async getFarmMarket() : Promise<void> {
    this.ProductList = new Array<Product>();
  }
}