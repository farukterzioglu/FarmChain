import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[balance]',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {
  balance : number;

  ngOnInit(): void {
    this.balance = 1000;  
  }
}