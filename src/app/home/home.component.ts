import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

        // smooth scrolling
  // $('app-header1 ul li a[href*="#"]').on('click',(e)=>{
 
  //   $('html, body').animate({
  //      scrollTop:$($(this).attr('href')).offset().top,
  //   },
  //   500,
  //   'linear')
  // })

    window.addEventListener('scroll', () => {
      $('section').each(function () {
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 150;
        let id = $(this).attr('id');
        let height = $(this).height();
        if (top > offset && top < offset + height) {
          $('app-header1 ul li a').removeClass('active');
          $('app-header1 ul').find(`[href="#${id}"]`).addClass('active')
        }
      })
  })


  }
}
