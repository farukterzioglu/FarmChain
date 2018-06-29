import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { User } from "../models/user";
import { Farm } from "../models/farm";

@Component({
  selector: '[balance]',
  templateUrl: './register.component.html'
})
export class FarmListComponent {

  public constructor(private farmChainService : FarmChainService){
    this.farmChainService.initializeContract().then( () => {
      
    });
  }

  public register(user : User) : void {
    
  }
}