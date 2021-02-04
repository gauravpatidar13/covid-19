import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 isPeople=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(tg){
    this.isPeople=tg;
  }
}
