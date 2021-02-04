import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const CanvasJS: any;
declare const Chart: any;
@Component({
  selector: 'app-meta-skills',
  templateUrl: './meta-skills.component.html',
  styleUrls: ['./meta-skills.component.css']
})
export class MetaSkillsComponent implements OnInit {
  @ViewChild('myChart')
  myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled:false,
      title: {
        text: ""
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart.render();



    
    // this.context = this.myCanvas.nativeElement.getContext('2d');
    


  }

}
