import { AfterViewChecked, Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { CyberService } from './services/cyber.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  
  
  ngOnInit() {
  
   $(document).ready(function () {
  
   

    $('.carousel').carousel('duration');
      $('.carousel').carousel();
      $('.tabs').tabs();
      $('.collapsible').collapsible();
      
      $('#prev').click(function(){
        $('.carousel').carousel('prev');
      });
      $('#next').click(function(){
        $('.carousel').carousel('next');
      });
      $('.parallax').parallax();
      $(".slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, //2000ms = 2s;
        autoplayHoverPause: true,
      });
    });
    
    
   
  }
}
