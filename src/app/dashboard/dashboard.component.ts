import { SmoothieService, Smoothie } from './../smoothie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  @Input() smoothie;
  private _smoothies: Smoothie[];

  private _title;
  
  private smoothieIngredients: string[] = ['Framboise', 'Fraise', 'Mangue', 'Banana'];

  constructor(private SmoothieService: SmoothieService) {
    SmoothieService.getSmoothies().subscribe( (smoothies) => {
      this._smoothies = smoothies;
      console.log(this._smoothies);
    });
  }

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



  set smoothies(smoothieList: any){
    this._smoothies = smoothieList;
  }

  get smoothies(): any{
    return this._smoothies;
  }

  getAllSmoothies(): void{

    this.SmoothieService.getSmoothies().subscribe( (smoothiesData) => {
      this.smoothies = smoothiesData;
      console.log(this.smoothies);
    });
  }

}