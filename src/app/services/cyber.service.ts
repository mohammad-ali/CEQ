import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CyberService {
  constructor(private http :HttpClient) { 
    
    
  }
  private REST_API_SERVER_PROJECTS = 'http://195.231.19.203:8080/api/project';
  private REST_API_SERVER_MEMBERS = 'http://195.231.19.203:8080/api/team-member';

 
  GetProjects() {
  return  this.http.get(this.REST_API_SERVER_PROJECTS);
 
  }

  GetMemberTeam(){
    return this.http.get(this.REST_API_SERVER_MEMBERS)
  }
  
}
