import { Component, OnInit } from '@angular/core';
import Chart, { ChartItem ,ChartOptions} from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barChart: any;
  lineChart: any;
  columnChart: any;
  stackedColumnChart: any;

  ngOnInit() {
    const barChartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Series 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1
      }, {
        label: 'Series 2',
        data: [5, 7, 9, 3, 6, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Revenue',
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
      }]
    };

    const columnChartData = {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [{
        label: 'Series 1',
        data: [50, 70, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Series 2',
        data: [30, 40, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    // Create the bar chart
    const barChartCtx: ChartItem = document.getElementById('barChart') as ChartItem;
    this.barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: barChartData,
      options: options
    });

    // Create the line chart
    const lineChartCtx: ChartItem = document.getElementById('lineChart') as ChartItem;
    this.lineChart = new Chart(lineChartCtx, {
      type: 'line',
      data: lineChartData,
      options: options
    });

    // Create the column chart
    const columnChartCtx: ChartItem = document.getElementById('columnChart') as ChartItem;
    this.columnChart = new Chart(columnChartCtx, {
      type: 'bar',
      data: columnChartData,
      options: options
    });

    const stackedColumnChartData = {
      labels: ['Data'],
      datasets: [
        {
          label: 'Series 1',
          data: [100],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }
      ]
    };

    const options2: ChartOptions<'bar'> = {
      indexAxis: 'x',
      scales: {
        x: {
          beginAtZero: true,
          max: 100
        },
        y: {
          beginAtZero: true
        }
      }
    };

    const stackedColumnChartCtx: ChartItem = document.getElementById('stackedColumnChart') as ChartItem;
    this.stackedColumnChart = new Chart(stackedColumnChartCtx, {
      type: 'bar',
      data: stackedColumnChartData,
      options: options2
    });
  }
}
