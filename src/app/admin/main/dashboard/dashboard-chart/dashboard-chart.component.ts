import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DashboardChart } from '../../../../models/admin/dashboardItem';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {
  @Input() data: DashboardChart;
  @ViewChild('chart') chart: GoogleChartComponent;

  constructor() { }

  ngOnInit(): void {
    // const dataSet = [this.data.columnNames].concat(this.data.data);
    // const googleDataSet = google.visualization.arrayToDataTable(dataSet);
    // this.chart.chart.draw(googleDataSet, this.data.options);
  }

}
