import { Web3Service } from "../util/web3.service";
import { Injectable } from "@angular/core";
import { Chicken } from "./chicken";
import { Observable, Subject } from "rxjs";
import { tryParse } from "selenium-webdriver/http";
import { Farm } from "./models/farm";
import { Product } from "./models/product";

declare let require: any;
const contractArtifacts = require("../../../build/contracts/FarmChain.json");

@Injectable({providedIn: 'root'})
export class MarketPlaceService{
	MarketPlaceContract: any;
	initializing : boolean;
	account : any;

	public accountsObservable = new Subject<string[]>();
	// public newFarmObservable = new Subject<Farm>();

	constructor(private web3Service : Web3Service){
		this.accountsObservable = this.web3Service.accountsObservable;
		// this.watchAccount();
	}
	
	public async initializeContract() : Promise<void>{
		console.log("Invoked 'initializeContract'");

		if(this.MarketPlaceContract) {
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
			this.MarketPlaceContract = abstraction;
			console.log("Contract created.");
			this.initializing = false;
    });
	}
	
	public async createProduct(product :Product){
		try {
			const contract = await this.MarketPlaceContract.deployed();
			
			let promise = contract.createNewProduct(
				this.web3Service.web3.fromAscii(product.ProductName), 
				this.web3Service.web3.fromAscii(product.ProductType), 
				{from : this.account});

			let result = await promise;	
			
			console.log("Product creation transaction sent. Block : " + result.receipt.blockNumber);
			
			return promise;
		} catch (error) {
			console.error(error);
		}
	}

	// public async getFarmCount() : Promise<number>{
	// 	if(!this.FarmChain) await this.initializeContract();
		
	// 	const deployedContrat = await this.FarmChain.deployed();
	// 	return deployedContrat.getFarmCount.call();
	// }

	// public async getFarm(index: number): Promise<any> {
	// 	if(!this.FarmChain) await this.initializeContract();

	// 	let contract = await this.FarmChain.deployed();
	// 	let farm = await contract.getfarm.call(index);
		
	// 	let result : Farm = {
	// 		UserName : "string",
	// 		UserAddress : "string",
	// 		FarmName : this.web3Service.web3.toAscii(farm[2]),
	// 		Location : this.web3Service.web3.toAscii(farm[3])
	// 	}; 
	// 	return result;
	// }
}