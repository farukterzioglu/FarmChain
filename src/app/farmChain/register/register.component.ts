import { Component, OnInit } from '@angular/core';
import { FarmChainService } from "../farmChain.service";

@Component({
  selector: '[balance]',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {
  balance : number;

  public constructor(private farmChainService : FarmChainService){
    this.farmChainService.initializeContract().then( () => {
      this.getBalance();
    });
  }
  
  ngOnInit(): void {
    this.balance = 0;   
  }

  private getBalance() : void {
    var balance = this.farmChainService.getBalance((err : Error, balance : number) => {
			if(err != null){
				console.error(err);
				return;
			}
      this.balance = balance;
		});
  }
}