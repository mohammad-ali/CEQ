import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-team',
  templateUrl: './first-team.component.html',
  styleUrls: ['./first-team.component.css']
})
export class FirstTeamComponent implements OnInit {
  a:number=0 ;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('html, body').animate({
          scrollTop: '900px'
      }, 1000);
  });
  }

}
