import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(private countryService: CountriesService){}


  public country: ICountry[] = [];

  searchByCountry(country: string): void {
     this.countryService.searchCountry(country).subscribe(
      countries => this.country = countries
     )
  }

}
