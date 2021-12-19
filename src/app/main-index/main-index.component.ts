import { AfterViewChecked, Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var $: any;

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})
export class MainIndexComponent implements OnInit   {
 public color :string ="y" ;
  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
     

      $('.carousel').carousel('duration');
      
      
  
    });
  }

  

  
  Ocolor(){
    this.color = "o" ;
  }
  Wcolor(){
    this.color = "w" ;
  }
  Bcolor(){
    this.color = "b" ;
  }
  Ycolor(){
    this.color ="y"
  }

}
