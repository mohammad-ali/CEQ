import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';

import { Team } from 'src/app/Interface/team';
import { CyberService } from 'src/app/services/cyber.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
 Teams : Team[] = [] 

 
  TeamMember :Team[] = [] 
  id :any ;
  constructor(
    private CyberService : CyberService ,
    private ActivateRout :ActivatedRoute
    ) { }

  
      


  ngOnInit(){
  


/* jquary code start  */
    $(document).ready(function () {
      
      
    
     
      $('html, body').animate({
          scrollTop: '1000px'
      }, 1000);
  
  });

/* jquary code End  */

  }

}
