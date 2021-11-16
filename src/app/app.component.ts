import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function () {
      alert('sss');
    });
  }
}
