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
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Pie
  public pieChartLabels: string[] = ['Chicken', 'Cow', 'Turkey', 'Goat'];
  public pieChartData: number[] = [25, 10, 5, 3];
  public pieChartType = 'pie';

  ngOnInit(): void {
    
  }
}
