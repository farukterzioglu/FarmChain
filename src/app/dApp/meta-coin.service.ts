import { Web3Service } from "../util/web3.service";
import { Injectable } from "@angular/core";
import { Balance } from "./balance";
import { Observable, Subject } from "rxjs";
import { tryParse } from "selenium-webdriver/http";

declare let require: any;

@Injectable({providedIn: 'root'})
export class MetaCoinService{
	constructor(private web3Service : Web3Service){
	}
}