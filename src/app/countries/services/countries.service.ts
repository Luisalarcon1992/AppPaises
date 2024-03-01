import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ICountry } from '../interfaces/country';
import { IRegionCountries, IStore } from '../interfaces/store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})

export class CountriesService {
  constructor(private http: HttpClient) {

    this.loadLocalStorage();
  }


  private _urlApi: string = 'https://restcountries.com/v3.1';

  public store: IStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion: {region: '', countries: []}
  }

  private getCountriesRequest( url : string ): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(url)
    .pipe(
      catchError(()=> of ())
    );
  }

  private saveLocalStorage() {
    localStorage.setItem('store', JSON.stringify( this.store ));
  }

  private loadLocalStorage() {

    if ( !localStorage.getItem('store')) return;

    this.store = JSON.parse( localStorage.getItem('store')!);
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
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.store.byCapital = { term: capital, countries: countries} ),
      tap( () => this.saveLocalStorage() ),
    );

  }

  searchCountry( country: string): Observable<ICountry[]> {

    const url = `${this._urlApi}/name/${country}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(
        countries => this.store.byCountry = {
          term : country,
          countries: countries
        }
      ),
      tap( () => this.saveLocalStorage() ),
    );
  }

  searchRegion( region: Region): Observable<ICountry[]> {
    const url = `${this._urlApi}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(
        countries => this.store.byRegion = {
          region: region,
          countries: countries
        }
      ),
      tap( () => this.saveLocalStorage() ),
    );
  }

}
