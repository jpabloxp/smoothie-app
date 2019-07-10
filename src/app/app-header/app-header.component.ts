import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  private _title;
  
  constructor() { }

  ngOnInit() {

    this.title = 'Welcome to SmoothieLand!';

  }

  set title(newTitle: string){
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

}
