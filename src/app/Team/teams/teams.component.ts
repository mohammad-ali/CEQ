import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      
      
    
     
      $('html, body').animate({
          scrollTop: '900px'
      }, 1000);
  
  });
  }

}
