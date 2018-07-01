import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { FarmDetailComponent } from './farmDetail.component';
import { FarmDetailRoutingModule } from './farmDetail-routing.module';

import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'mapp',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [mapTypeId]="'hybrid'">
    <agm-marker 
      *ngFor="let m of markers; let i = index"
      [latitude]="m.lat"
      [longitude]="m.lng"
      [label]="m.label">
      
    <agm-info-window>
      <strong></strong>
    </agm-info-window>
    </agm-marker>
  </agm-map>
  `
})
export class MAppComponent {
  mapType : "roadmap";
  zoom: number = 16;
  lat: number = 37.843646;
  lng: number = 32.570062;

  markers: marker[] = [
	  {
		  lat: 37.843646,
		  lng: 32.570062,
		  label: '',
		  draggable: false
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgWQllVG7xPTr53uWFmiBkZ12tWJevY5o'
    }),
    CommonModule,
    FormsModule,
    FarmDetailRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ FarmDetailComponent, MAppComponent ]
})
export class FarmDetailModule { }
