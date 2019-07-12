import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from './../smoothie.service';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css']
})

export class SmoothieComponent implements OnInit {

  @Input() smoothie;
  private _smoothies: Smoothie[];

  private _title;

  constructor(private SmoothieService: SmoothieService) {
    SmoothieService.getSmoothies().subscribe( (smoothies) => {
      this._smoothies = smoothies;
      console.log(this._smoothies);
    });
  }

  //SMOOTHIES

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

  getDetail(smoothieId: string){
    
  }

  //ON INIT
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

}
