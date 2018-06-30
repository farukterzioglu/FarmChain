import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { User } from "../models/user";
import { Farm } from "../models/farm";

@Component({
  selector: '[farmlist]',
  templateUrl: './farmList.component.html'
})
export class FarmlistComponent { 
  farmName : string;
  farmLocation : string;

  FarmList : Farm[] = new Array();

  public constructor(private farmChainService : FarmChainService){
    console.log("FarmListComponent init...");
    
    this.farmChainService.initializeContract().then( () => {
      this.getFarmList();

      this.FarmList.push({
        UserName : "string",
        UserAddress : "string", 
        FarmName : "string",
        Location : "string"
      });

      console.log(this.FarmList);
    });
  }

  public createFarm(){
    console.log(this.farmName);
    console.log(this.farmLocation);
    
    let farm : Farm = {
      UserName : "",
      UserAddress : "",
      FarmName : this.farmName,
      Location : this.farmLocation
     };

    this.farmChainService.createFarm(farm);
  }

  public async getFarmList() : Promise<void> {
    var farmList = await this.farmChainService.getFarmCount();
    console.log(farmList.toString()); 
  }

  getFarmName(term : string): void {
    this.farmName = term;
  }

  getLocationName(term : string): void {
    this.farmLocation = term;
  }

  public register(user : User) : void {
    
  }
}