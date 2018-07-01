import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketPlaceService} from "../../farmChain/marketPlace.service";
import { Product } from "../../farmChain/models/product";

@Component({
  templateUrl: 'farmDetail.component.html'
})
export class FarmDetailComponent implements OnInit {
  ngOnInit(): void {
    
  }

  public constructor(private marketPlaceService : MarketPlaceService){
    this.marketPlaceService.initializeContract().then( () => {});
  }

  public buyProduct() : void {
    this.marketPlaceService.buyProduct();
  }
}
