import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
  let items=$('ul li.nav-item')
  for(let i=0;i<items.length;i++){
    items[i].addEventListener('click',()=>{
      $('#menu').toggleClass('fa-times');
  $('#menu').toggleClass('fa-bars');
  $('#mjh').toggleClass('nav-toggle');
    })
  }
$('#menu').on('click',()=>{
  $('#menu').toggleClass('fa-times');
  $('#menu').toggleClass('fa-bars');
  $('#mjh').toggleClass('nav-toggle');

})
  }}
