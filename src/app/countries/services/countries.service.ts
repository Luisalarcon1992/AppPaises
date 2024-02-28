import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {
  constructor(private http: HttpClient) { }


  private _urlApi: string = 'https://restcountries.com/v3.1'


  searchCapital( capital: string): Observable<ICountry[]> {

    return this.http.get<ICountry[]>(`${this._urlApi}/capital/${capital}`);

  }

}
