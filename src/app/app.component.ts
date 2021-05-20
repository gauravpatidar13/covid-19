import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'may19';
  scrollTop(){
  
  }
  ngOnInit(){
   window.addEventListener('scroll',()=>{
   if($(window).scrollTop()>650){
     $('#roc').css({'display':'block'})
   }else{
    $('#roc').css({'display':'none'})
   }
   })
 
  }
 
}
