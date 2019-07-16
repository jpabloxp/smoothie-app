import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmoothieService, Smoothie } from './../smoothie.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})

export class ModificationComponent implements OnInit {

  /*   private changeSmoothieForm = new FormGroup({
  
      titre: new FormControl(''),
      recommendations: new FormControl(''),
      description: new FormControl(''),
  
      ingredients: new FormGroup({
        nom: new FormControl(''),
        quantite: new FormControl('')
      }),
  
      features: new FormGroup({
        cout: new FormControl(''),
        tempsPreparation: new FormControl('')
      }),
  
      deroulement: new FormGroup({
        pas: new FormControl('')
      }),
  
      photo: new FormGroup({
        title: new FormControl(''),
        path: new FormControl(''),
        description: new FormControl('')
      })
  
    }); */

  private changeSmoothieForm = this.fb.group({

    titre: [''],
    recommendations: [''],
    description: [''],

    ingredients: this.fb.array([
      this.fb.group({
        nom: [''],
        quantite: ['']
      })
    ]),
    features: this.fb.array([
      this.fb.group({
        cout: [''],
        tempsPreparation: ['']
      })
    ]),
    deroulement: this.fb.array([
      this.fb.group({
        pas: ['']
      })
    ]),
    photo: this.fb.array([
      this.fb.group({
        title: [''],
        path: [''],
        description: ['']
      })
    ]),
  });

  smoothieForm: FormGroup;

  private _changeSmoothie: Smoothie;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _SmoothieService: SmoothieService) { }

  ngOnInit() {
    const smoothieId = this.route.snapshot.paramMap.get('id');
    console.log(smoothieId);

    this._SmoothieService.getOneSmoothie(smoothieId).subscribe((smoothies) => {
      this._changeSmoothie = smoothies;
      console.log(this._changeSmoothie);
    });

   // this.buildForm();
  }

  private buildForm() {
    this.smoothieForm = this.fb.group(
      {
        hideRequiered: false,
        floatLabel: 'auto',
        title: ['', Validators.required],
      }
    );
  }

  get myForm() {
    return this.changeSmoothieForm.controls;
  }


  onSubmit() {
    // stop here if form is invalid
    if (this.changeSmoothieForm.invalid) {
      return;
    } else {
      this._changeSmoothie.titre = this.myForm.titre.value;
      //console.log("AQI"+this._changeSmoothie);
      this._SmoothieService.addSmoothie(this._changeSmoothie);
    }
  }



}
