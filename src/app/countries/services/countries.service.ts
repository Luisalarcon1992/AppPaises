import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ICountry } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {
  constructor(private http: HttpClient) { }


  private _urlApi: string = 'https://restcountries.com/v3.1';

  searchByAlphaCode( id: string): Observable<ICountry | null> {

    return this.http.get<ICountry[]>(`${this._urlApi}/alpha/${id}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
    catchError(()=> of (null))
    )
  }

  searchCapital( capital: string): Observable<ICountry[]> {

    return this.http.get<ICountry[]>(`${this._urlApi}/capital/${capital}`)
    .pipe(
      catchError(()=> of ([]))
    );

  }

  searchCountry( country: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this._urlApi}/name/${country}`)
    .pipe(
      catchError(()=> of ([]))
    );
  }

  searchRegion( region: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this._urlApi}/region/${region}`)
    .pipe(
      catchError(()=> of ([]))
    )
  }

}
