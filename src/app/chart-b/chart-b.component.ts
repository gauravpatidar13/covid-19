import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
@Component({
  selector: 'app-chart-b',
  templateUrl: './chart-b.component.html',
  styleUrls: ['./chart-b.component.css']
})
export class ChartBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July'],
          datasets: [{
              label: 'Series A',
              data: [0,10, 13, 15, 19, 21, 30],
              backgroundColor: [
                  'rgb(53, 157, 142)',
                  'rgb(53, 157, 142)',
                  'rgb(53, 157, 142)',
                  'rgb(53, 157, 142)',
                  'rgb(53, 157, 142)',
                  'rgb(53, 157, 142)',
                  'rgb(53, 157, 142)',
              ],
              borderColor: [
                'rgb(53, 157, 142)',
                'rgb(53, 157, 142)',
                'rgb(53, 157, 142)',
                'rgb(53, 157, 142)',
                'rgb(53, 157, 142)',
                'rgb(53, 157, 142)',
                'rgb(53, 157, 142)',
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
