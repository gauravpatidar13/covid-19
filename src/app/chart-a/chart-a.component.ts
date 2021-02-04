import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
@Component({
  selector: 'app-chart-a',
  templateUrl: './chart-a.component.html',
  styleUrls: ['./chart-a.component.css']
})
export class ChartAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July'],
          datasets: [{
              label: 'Series A',
              data: [0,10, 13, 15, 19, 21, 30],
              backgroundColor: [
                  'rgb(193, 152, 182)',
                  'rgb(193, 152, 182)',
                  'rgb(193, 152, 182)',
                  'rgb(193, 152, 182)',
                  'rgb(193, 152, 182)',
                  'rgb(193, 152, 182)',
                  'rgb(193, 152, 182)',
              ],
              borderColor: [
                'rgb(193, 152, 182)',
                'rgb(193, 152, 182)',
                'rgb(193, 152, 182)',
                'rgb(193, 152, 182)',
                'rgb(193, 152, 182)',
                'rgb(193, 152, 182)',
                'rgb(193, 152, 182)',
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
