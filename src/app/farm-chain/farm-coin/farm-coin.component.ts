import { Component, OnInit } from '@angular/core';
import { Web3Service } from "../../util/web3.service";
import { log } from 'util';

declare let require :any;
const farmCoinArtifacts = require("../../../../build/contracts/FarmCoin.json"); 

@Component({
  selector: 'app-farm-coin',
  templateUrl: './farm-coin.component.html',
  styleUrls: ['./farm-coin.component.css']
})
export class FarmCoinComponent implements OnInit {
  accounts: string[];
  FarmCoin: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };

  status = '';

  constructor(private web3Service : Web3Service) {
    console.log({web3Service});
  }

  ngOnInit()  : void {
    console.log('OnInit...');
    this.web3Service.artifactsToContract(farmCoinArtifacts)
      .then( (artifact) => { this.FarmCoin = artifact});

    this.watchAccounts();
  }

  watchAccounts() : void {
    this.web3Service.accountsObservable.subscribe( (accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
  }

  async refreshBalance() : Promise<void> {
    console.log('Refreshing balance...');
    console.log(this.model.account);

    try {
      const deployedContract = await this.FarmCoin.deployed();
      const balance = await deployedContract.balanceOf.call(this.model.account);
      this.model.balance = balance;
      console.log({balance});
      
    } catch (error) {
      
    }
  }

  async sendCoin(){
    if(!this.FarmCoin){
      this.setStatus("Farmcoin is not looaded!"); return ;
    }

    console.log("Sending" + this.model.amount + " FarmCoin to " + this.model.receiver );
    
    this.setStatus("Starting transaction...");
    try {
      const contract = await this.FarmCoin.deployed();
      const transaction = await contract.transfer.sendTransaction(
        this.model.receiver, this.model.amount,
        { from : this.model.account}
      );

      if(!transaction){
        this.setStatus("Transaction failed!");
      } else {
        this.setStatus("Transaction completed.");
      }
    } catch (error) {
      console.log(error);
      this.setStatus("Error while sending coin.");
    }

    const ref = this;
    setTimeout(function () {
      ref.refreshBalance();
    }, 5000);
  }

  setStatus(status){
    console.log({status});
  }

  setAmount(e) {
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    this.model.receiver = e.target.value;
  }
}
