import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";

@Component({
  selector: '[balance]',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {
  balance : number;

  public constructor(private farmChainService : FarmChainService){
    this.farmChainService.initializeContract();
  }
  ngOnInit(): void {
    this.balance = 100;   
  }
}