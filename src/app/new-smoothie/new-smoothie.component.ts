import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmoothieService, Smoothie } from './../smoothie.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-smoothie',
  templateUrl: './new-smoothie.component.html',
  styleUrls: ['./new-smoothie.component.css']
})
export class NewSmoothieComponent implements OnInit {

  private smoothieForm = this.fb.group({

    titre: ['', Validators.required],
    recommendations: [''],
    description: [''],

    ingredients: this.fb.array([
      this.fb.group({
        nom: ['', Validators.required],
        quantite: ['', Validators.required]
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
        pas: ['', Validators.required]
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

  // On crée une propriété pour le smoothie en cours
  newSmoothie: Smoothie = {
    titre: '',
    ingredients: [
      {
        nom: '',
        quantite: '',
      }
    ],
    features: [
      {
        cout: '',
        tempsPreparation: '',
      }
    ],
    recommendations: '',
    description: '',
    deroulement: [
      {
        pas: '',
      }
    ],
    photo: [
      {
        title: '',
        path: '',
        description: '',
      }
    ]
  };

  //smoothieForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _SmoothieService: SmoothieService) { }

  ngOnInit() {

    //this.buildForm();
  }

  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      titre: ['', Validators.required],
    });
  }

  get myForm() {
    return this.smoothieForm.controls;
  }

  addIngredient() {
    (this.smoothieForm.controls['ingredients'] as FormArray).push(this.createIngredient())
  }

  createIngredient() {
    return this.fb.group({
      nom: ['', Validators.required],
      quantite: ['', Validators.required]
    })
  }

  addFeatures() {
    (this.smoothieForm.controls['features'] as FormArray).push(this.createFeature())
  }

  createFeature() {
    return this.fb.group({
      cout: [''],
      tempsPreparation: ['']
    })
  }

  addDeroulement() {
    (this.smoothieForm.controls['deroulement'] as FormArray).push(this.createDeroulement())
  }

  createDeroulement() {
    return this.fb.group({
      pas: ['', Validators.required]
    })
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {

      this.newSmoothie.titre = this.myForm.titre.value;
      this.newSmoothie.recommendations = this.myForm.recommendations.value;
      this.newSmoothie.description = this.myForm.description.value;

      this.newSmoothie.ingredients.pop();
      for (let ingredient of this.myForm.ingredients.value) {

        this.newSmoothie.ingredients.push(ingredient);
      }

      this.newSmoothie.features.pop();
      for (let feature of this.myForm.features.value) {

        this.newSmoothie.features.push(feature);
      }

      this.newSmoothie.deroulement.pop();
      for (let deroulements of this.myForm.deroulement.value) {

        this.newSmoothie.deroulement.push(deroulements);
      }

      this.newSmoothie.photo.pop();
      for (let photos of this.myForm.photo.value) {

        this.newSmoothie.photo.push(photos);
      }

      this.addSmoothie(this.newSmoothie); 
    }

  }

  addSmoothie(newSmoothie: Smoothie) {
    this._SmoothieService.addSmoothie(newSmoothie).subscribe((lastInsertSmoothie) => {
      console.log('smoothie inséré', lastInsertSmoothie);
    });
  }



}
