import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ICountry } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {
  constructor(private http: HttpClient) { }


  private _urlApi: string = 'https://restcountries.com/v3.1';

  private getCountriesRequest( url : string ): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(url)
    .pipe(
      catchError(()=> of ())
    );
  }

  searchByAlphaCode( id: string): Observable<ICountry | null> {

    return this.http.get<ICountry[]>(`${this._urlApi}/alpha/${id}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
    catchError(()=> of (null))
    )
  }

  searchCapital( capital: string): Observable<ICountry[]> {

    const url = `${this._urlApi}/capital/${capital}`;
    return this.getCountriesRequest(url);

  }

  searchCountry( country: string): Observable<ICountry[]> {

    const url = `${this._urlApi}/name/${country}`;
    return this.getCountriesRequest(url);
  }

  searchRegion( region: string): Observable<ICountry[]> {
    const url = `${this._urlApi}/region/${region}`;
    return this.getCountriesRequest(url);
  }

}
