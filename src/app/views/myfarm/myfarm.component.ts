import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'myfarm.component.html'
})
export class MyfarmComponent implements OnInit {
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Hatçe Ananın Çiftliği'},
    {data: [35, 32, 75, 25, 10, 65, 95], label: 'Karadeniz Uşağı'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Northern Tiger'}
  ];

  // Pie
  public pieChartLabels: string[] = ['Chicken', 'Cow', 'Turkey', 'Goat'];
  public pieChartData: number[] = [25, 10, 5, 3];
  public pieChartType = 'pie';

  ngOnInit(): void {
    
  }
}
