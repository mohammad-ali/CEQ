import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  public color :string ="y" ;
  constructor() { }

  ngOnInit(): void {
  }
  
   public Ocolor(){
    this.color = "o" ;
  }
  public Wcolor(){
    this.color = "w" ;
  }
  public Bcolor(){
    this.color = "b" ;
  }
  public  Ycolor(){
    this.color ="y"
  }

}
