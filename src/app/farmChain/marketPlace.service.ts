import { Web3Service } from "../util/web3.service";
import { Injectable } from "@angular/core";
import { Chicken } from "./chicken";
import { Observable, Subject } from "rxjs";
import { tryParse } from "selenium-webdriver/http";
import { Product } from "./models/product";

declare let require: any;
const contractArtifacts = require("../../../build/contracts/MarketPlace.json");

@Injectable({providedIn: 'root'})
export class MarketPlaceService{
	MarketPlaceContract: any;
	initializing : boolean;
	account : any;

	public accountsObservable = new Subject<string[]>();
	// public newFarmObservable = new Subject<Farm>();

	constructor(private web3Service : Web3Service){
		this.accountsObservable = this.web3Service.accountsObservable;
		this.watchAccount();
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
				this.web3Service.web3.fromAscii(product.Name), 
				this.web3Service.web3.fromAscii(product.Price), 
				this.web3Service.web3.fromAscii(product.ImageLink), 
				this.web3Service.web3.fromAscii(product.FarmName), 
				{from : this.account});

			let result = await promise;	
			
			console.log("Product creation transaction sent. Block : " + result.receipt.blockNumber);
			
			return promise;
		} catch (error) {
			console.error(error);
		}
	}

	public async getProductCount() : Promise<number>{
		if(!this.MarketPlaceContract) await this.initializeContract();
		
		const deployedContrat = await this.MarketPlaceContract.deployed();
		return deployedContrat.getProductCount.call();
	}

	public async getProduct(index: number): Promise<any> {
		if(!this.MarketPlaceContract) await this.initializeContract();

		let contract = await this.MarketPlaceContract.deployed();
		let product = await contract.getproduct.call(index);
		
		let result : Product = {
			Id : 0,
			Name : this.web3Service.web3.toAscii(product[0]),
			Price : this.web3Service.web3.toAscii(product[1]),
			ImageLink : this.web3Service.web3.toAscii(product[2]),
			FarmName : this.web3Service.web3.toAscii(product[3]),
		}; 
		return result;
	}

	private watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
			this.account = accounts[0];
    });
  }
}