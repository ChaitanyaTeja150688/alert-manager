import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHere() {
    window.open('http://localhost:4200/alert-mangaer', 
      'C-Sharpcorner', 
      'toolbar=no,scrollbars=no,resizable=no,top=100,left=200,width=900,height=500');
  }

}
