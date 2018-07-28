import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";
import { User } from "../models/user";

@Component({
  selector: '[balance]',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  public constructor(private farmChainService : FarmChainService){
    this.farmChainService.initializeContract().then( () => {
      
    });
  }

  public register(user : User) : void {
    
  }
}