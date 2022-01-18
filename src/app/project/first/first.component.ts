import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/Interface/projects';
import { CyberService } from 'src/app/services/cyber.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  
})
export class FirstComponent implements OnInit {
project : Projects[] = [] ;
 public v : any = 2;

constructor(private CyberService : CyberService,
  private rout : ActivatedRoute){}



  


  ngOnInit(): void {

   
    this. CyberService.GetProjects(this.v).subscribe((result) => {
      console.log(result)
      let proj = JSON.parse(JSON.stringify(result))
      return this.project = proj.rows ;
    })  ;
   

    


    $(document).ready(function() {
      $('html, body').animate({
          scrollTop: '1000px'
      }, 1000);
  });


  
}




val(ev : number){

 this.v= ev

}



}
