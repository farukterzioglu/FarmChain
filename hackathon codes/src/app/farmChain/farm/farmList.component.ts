import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { Farm } from "../models/farm";

@Component({
  selector: '[farmlist]',
  templateUrl: './farmList.component.html'
})
export class FarmlistComponent { 
  FarmList : Farm[] = new Array();

  public constructor(private farmChainService : FarmChainService){
    console.log("FarmListComponent init...");
    
    this.farmChainService.initializeContract().then( () => {
      this.getFarmList();
    });
  }
  public async getFarmList() : Promise<void> {
    this.FarmList = new Array<Farm>();

    var count = await this.farmChainService.getFarmCount();

    for (let index = count - 1 ; index >= 0; index--) {
      const farm = await this.farmChainService.getFarm(index);
      this.FarmList.push(farm);
    }
    console.log(this.FarmList); 
  }
}