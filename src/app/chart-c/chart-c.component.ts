import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-chart-c',
  templateUrl: './chart-c.component.html',
  styleUrls: ['./chart-c.component.css']
})
export class ChartCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart3", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July'],
          datasets: [{
              label: 'Series A',
              data: [0,10, 13, 15, 19, 21, 30],
              backgroundColor: [
                  'rgb(33, 158, 188)',
                  'rgb(33, 158, 188)',
                  'rgb(33, 158, 188)',
                  'rgb(33, 158, 188)',
                  'rgb(33, 158, 188)',
                  'rgb(33, 158, 188)',
                  'rgb(33, 158, 188)',
              ],
              borderColor: [
                'rgb(33, 158, 188)',
                'rgb(33, 158, 188)',
                'rgb(33, 158, 188)',
                'rgb(33, 158, 188)',
                'rgb(33, 158, 188)',
                'rgb(33, 158, 188)',
                'rgb(33, 158, 188)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
