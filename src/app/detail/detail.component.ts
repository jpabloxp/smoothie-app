import { Component, OnInit } from '@angular/core';
import { SmoothieService, Smoothie } from './../smoothie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private _oneSmoothie: Smoothie;

  constructor(private route: ActivatedRoute, private SmoothieService: SmoothieService) {
  }

  ngOnInit() {
    const smoothieId = this.route.snapshot.paramMap.get('id');
    console.log(smoothieId);

    this.SmoothieService.getOneSmoothie(smoothieId).subscribe( (smoothies) => {
      this._oneSmoothie = smoothies;
      console.log(this._oneSmoothie);
    });
  }


}
