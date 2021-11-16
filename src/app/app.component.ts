import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    $(document).ready(function () {
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

      
      
    });
    
    $(document).ready(function () {
      $('.counter').counter({
        start: 1000,
        end: 4500,
        time: 8,
        step: 500,
        callback: function() {
            alert("I'm done!");
        }
    });
  });
  
    
    
  }
}
