import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var $: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('html, body').animate({
      scrollTop: '0px'
  }, 1000);


  
  }

}
