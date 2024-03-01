import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  constructor(private countryService: CountriesService){}


  public country: ICountry[] = [];
  public initialValue: string = ''

  ngOnInit(): void {
    this.country = this.countryService.store.byCountry.countries;
    this.initialValue = this.countryService.store.byCountry.term;
  }

  searchByCountry(country: string): void {
     this.countryService.searchCountry(country).subscribe(
      countries => this.country = countries
     )
  }

}
