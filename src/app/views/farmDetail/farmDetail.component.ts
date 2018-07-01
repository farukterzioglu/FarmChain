import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketPlaceService} from "../../farmChain/marketPlace.service";
import { Product } from "../../farmChain/models/product";

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  templateUrl: 'farmDetail.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})
export class FarmDetailComponent implements OnInit {
  myInterval: number = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  
  ngOnInit(): void {
    
  }

  public constructor(private marketPlaceService : MarketPlaceService){
    this.marketPlaceService.initializeContract().then( () => {});

    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public buyProduct() : void {
    this.marketPlaceService.buyProduct();
  }

  addSlide(): void {
    this.slides.push({
      image: `https://lorempixel.com/900/500/sports/${this.slides.length % 8 + 1}/`
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
