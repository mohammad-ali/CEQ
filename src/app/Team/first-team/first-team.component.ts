import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/Interface/team';
import { CyberService } from 'src/app/services/cyber.service';

@Component({
  selector: 'app-first-team',
  templateUrl: './first-team.component.html',
  styleUrls: ['./first-team.component.css']
})
export class FirstTeamComponent implements OnInit {
  
  Teams : Team[] =[] ;
  constructor(private CyberService : CyberService) { }

  ngOnInit(): void {
    this. CyberService.GetMemberTeam().subscribe((result) => {
      
      let proj = JSON.parse(JSON.stringify(result))
      return this.Teams = proj.rows ;
    })

    $(document).ready(function() {
      $('html, body').animate({
          scrollTop: '1000px'
      }, 1000);
  });
  }

}
