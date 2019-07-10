import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  @Input() smoothie;

  private _title;
  
  private smoothieIngredients: string[] = ['Framboise', 'Fraise', 'Mangue', 'Banana'];

  constructor() { }

  ngOnInit() {

    this.title = 'Welcome to SmoothieLand!';
    this.smoothie = 'Sunrise';

  }

  set title(newTitle: string){
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  getTitle(): string{
    return this.title;
  }
}