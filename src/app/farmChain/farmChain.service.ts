import { Web3Service } from "../util/web3.service";
import { Injectable } from "@angular/core";
import { Chicken } from "./chicken";
import { Observable, Subject } from "rxjs";
import { tryParse } from "selenium-webdriver/http";

declare let require: any;
const contractArtifacts = require("../../../build/contracts/TutorialToken.json");

@Injectable({providedIn: 'root'})
export class FarmChainService{
	FarmChain: any;
	initializing : boolean;
	account : any;

	public accountsObservable = new Subject<string[]>();
	public dataObservable = new Subject<any[]>();

	constructor(private web3Service : Web3Service){
		this.accountsObservable = this.web3Service.accountsObservable;
		this.watchAccount();
	}
	
	public async initializeContract() : Promise<void>{
		console.log("Invoked 'initializeContract'");

		if(this.FarmChain) {
			console.log("Contract already created.");
			return;
		}

		if(this.initializing) {
			console.log("Contract is being initialized...");

			const delay = new Promise(resolve => setTimeout(resolve, 1000));
      await delay;
      return await this.initializeContract();
		}

		//Initializing...
		this.initializing = true;

		return this.web3Service.artifactsToContract(contractArtifacts)
		.then((abstraction) => {
			this.FarmChain = abstraction;
			console.log("Contract created.");
			this.initializing = false;
    });
	}

	public async filterAll() : Promise<void>{
		var options  = {
			fromBlock: 0, 
			toBlock: 'latest'
		};
		var filter = this.web3Service.web3.eth.filter(options);

		filter.watch(function(error, result){
			if (!error)
				console.log(result);
		});
	}
	
	public async watchAllEvents() : Promise<void> {
		if(!this.FarmChain) await this.initializeContract();
		const deployedContrat = await this.FarmChain.deployed();

		var events = deployedContrat.allEvents(function(error, log){
			if (!error)
				console.log(log);
		});
	}

	// public async subscribeToNewEvent(callback : (error : Error, result : any) => void ) : Promise<void> {
	// 	if(!this.FarmChain) await this.initializeContract();

	// 	const deployedContrat = await this.FarmChain.deployed();
		
	// 	var myEvent = deployedContrat.NewEvent();
	// 	myEvent.watch(function(error, result){
	// 		if (error != null) {
	// 			console.warn('There was an error!');
	// 			console.error();
	// 			return;
	// 		}
	// 		callback(error, result);
	// 	});
	// }

	// public async queryAllNewEvent(callback : (error : Error, result : Saying) => void ) : Promise<void> {
	// 	if(!this.FarmChain) await this.initializeContract();

	// 	const deployedContrat = await this.FarmChain.deployed();
		
	// 	var myEvent = deployedContrat.NewEvent({type: 'mined'}, {fromBlock: 0, toBlock: 'latest'});
	// 	myEvent.get(function(error, results){
	// 		if (error != null) {
	// 			console.warn('There was an error!');
	// 			console.error();
	// 			return;
	// 		}

	// 		callback(error, results);
	// 	});
	// }

	// public async getCount() : Promise<number>{
	// 	if(!this.FarmChain) await this.initializeContract();
		
	// 	const deployedContrat = await this.FarmChain.deployed();
	// 	return deployedContrat.getSayingCount.call();
	// }

	// public async getData(index: number): Promise<any> {
	// 	if(!this.FarmChain) await this.initializeContract();

	// 	let contract = await this.FarmChain.deployed();
	// 	let data = await contract.getData.call(index);

	// 	let result : any = {
	// 		data : this.web3Service.web3.toAscii(data),
	// 	}; 
	// 	return result;
  // }

	public toAscii(text : string | number) : string{
		return this.web3Service.web3.toAscii(text);
	}
	// //https://ethereum.stackexchange.com/questions/23058/web3-return-bytes32-string
	// public async writeData(text : string, textHash : string | number) : Promise<any> {
	// 	try {
	// 		const contract = await this.FarmChain.deployed();
			
	// 		let writeDataPromise = contract.writeData(
	// 			this.web3Service.web3.fromAscii(textHash), 
	// 			this.web3Service.web3.fromAscii(text), 
	// 			{from : this.account});

	// 		let result = await writeDataPromise;	
			
	// 		let data : any = {
	// 			text : text,
	// 			hash : textHash,
	// 			address : this.account,
	// 			blockCount : result.receipt.blockNumber,
	// 		};

	// 		this.dataObservable.next(data);
			
	// 		return writeDataPromise;
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	private watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
			this.account = accounts[0];
    });
  }
}