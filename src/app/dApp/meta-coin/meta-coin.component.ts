import { Component, OnInit } from "@angular/core";
import { MetaCoinService } from "../meta-coin.service";
import {Web3Service} from '../../util/web3.service';
import { log } from "util";

declare let require: any;
const metacoin_artifacts = require('../../../../build/contracts/MetaCoin.json');

@Component({
  selector: 'meta-coin',
  templateUrl: './meta-coin.component.html',
  styleUrls: ['./meta-coin.component.css']
})
export class MetaCoinComponent implements OnInit{
  accounts: string[];
  MetaCoin: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };

  status = '';

  constructor(
    private web3Service: Web3Service, 
    private metaCoinService : MetaCoinService) { }

  async ngOnInit(){
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(metacoin_artifacts)
      .then((MetaCoinAbstraction) => {
        this.MetaCoin = MetaCoinAbstraction;
      });
  }
  
  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
  }

  setStatus(status) {
    console.log({status});
  }

  async sendCoin() {
    if (!this.MetaCoin) {
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;
    const receiver = this.model.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      const transaction = await deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      console.log(deployedMetaCoin);
      console.log('Account', this.model.account);
      const metaCoinBalance = await deployedMetaCoin.getBalance.call(this.model.account);
      console.log('Found balance: ' + metaCoinBalance);
      this.model.balance = metaCoinBalance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.model.receiver = e.target.value;
  }
}