import { Component, Input, OnInit } from '@angular/core';
import { Projects } from 'src/app/Interface/projects';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
    

    $(document).ready(function () {
      
      
    
     
        $('html, body').animate({
            scrollTop: '900px'
        }, 1000);
    
    });
  }

}
