import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Smoothie{

  _id?: string;
  titre: string;
  ingredients: [
    {
      nom: string;
      quantite: string;
    }
  ];
  features: [
    {
      cout: string;
      tempsPreparation: string;
    }
  ];
  recommendations: string;
  description: string;
  deroulement: [
      {
        pas: string;
      }
  ];
  photo: [
      {
        title: string;
        path: string;
        description: string;
      }
  ];
}

@Injectable({
  providedIn: 'root'
})

export class SmoothieService {

  private apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router: Router){}

  // Get all Smoothie
  getSmoothies(): Observable<Smoothie[]> {

    const smoothieListUrl = environment.apiURL + "/smoothie";

    return this.http.get<Smoothie[]>(smoothieListUrl);
  }

  // Get a single Smoothie
  getOneSmoothie(id: string): Observable<Smoothie> {
    const getUrl = `${this.apiURL}/test/${id}`;
    console.log(getUrl);
    return this.http.get<Smoothie>(getUrl);
  }

  addSmoothie(smoothie: Smoothie) {

    console.log('in service  ', smoothie);

    const addUrl = `${this.apiURL}/add`;
    return this.http.post<Smoothie>(addUrl, smoothie);
  }
  
}

