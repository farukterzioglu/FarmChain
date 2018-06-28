import {Injectable} from '@angular/core';
import * as contract from 'truffle-contract';
import { Observable, Subject } from 'rxjs';

declare let require: any;
const Web3 = require('web3');

declare let window: any;

@Injectable()
export class Web3Service {
	public web3: any;
	private web3Provider: null;
	private accounts: string[];

	public ready = false;
	public accountsObservable = new Subject<string[]>();

	constructor() {
			window.addEventListener('load', (event) => {
			this.bootstrapWeb3();
			});
	}

	public bootstrapWeb3() {
		// Checking if Web3 has been injected by the browser (Mist/MetaMask)
		if (typeof window.web3 !== 'undefined') {
				// Use Mist/MetaMask's provider
				this.web3Provider = window.web3.currentProvider;
		} else {
				this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
		}
		
		this.web3 = new Web3(this.web3Provider);
		console.log("Web3 initialized.");
		setInterval(() => this.refreshAccounts(), 1000);
	}

	public async artifactsToContract(artifacts) {
		if (!this.web3) {
			const delay = new Promise(resolve => setTimeout(resolve, 1000));
			await delay;
			return await this.artifactsToContract(artifacts);
		}

		const contractAbstraction = contract(artifacts);
		contractAbstraction.setProvider(this.web3.currentProvider);
		return contractAbstraction;
	}

	public getAccounts(callback : (err : Error, accs : string[]) => void){
		if(!this.web3)
			return Promise.reject(new Error("Web3 didn't initialized!"));
		
		return this.web3.eth.getAccounts(callback);
	}
	
	private refreshAccounts() {
		this.web3.eth.getAccounts((err, accs) => {
			console.log('Refreshing accounts');
			if (err != null) {
			console.warn('There was an error fetching your accounts.');
			return;
			}

			// Get the initial account balance so it can be displayed.
			if (accs.length === 0) {
			console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
			return;
			}

			if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
			console.log('Observed new accounts');

			this.accountsObservable.next(accs);
			this.accounts = accs;
			}

			this.ready = true;
		});
	}
}