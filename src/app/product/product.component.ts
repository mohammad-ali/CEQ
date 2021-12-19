import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      
      $('.collapsible').collapsible();
    
     
        $('html, body').animate({
            scrollTop: '900px'
        }, 1000);
    
    });
  }

}
