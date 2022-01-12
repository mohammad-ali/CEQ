import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CyberService {
  constructor(private http :HttpClient) { 
    
    
  }
  private REST_API_SERVER_PROJECTS = 'http://195.231.19.203:8080/api/project?page=2';
  private REST_API_SERVER_MEMBERS = 'http://195.231.19.203:8080/api/team-member';

 


  GetProjects(page  : number) {
    var url:string  ='http://195.231.19.203:8080/api/project';
    if( page  != 0){
       url = url +'?page=' + page;
       console.log(url);
    }
    return  this.http.get(url);
 
  }


  GetMemberTeam(){
    return this.http.get(this.REST_API_SERVER_MEMBERS)
  }
  
}
