import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'empty-component',
  templateUrl: './empty-component.component.html',
  styleUrls: ['./empty-component.component.css']
})
export class EmptyComponent implements OnInit{
  text :string;
  constructor() { }
  async ngOnInit(){
    console.log("Initializing EmptyComponent..."); 
  }  
}