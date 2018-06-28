import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[balance]',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {
  balance : number;

  public constructor(){
    console.log("BalanceComponent ctor");
  }
  ngOnInit(): void {
    this.balance = 100;   
  }
}