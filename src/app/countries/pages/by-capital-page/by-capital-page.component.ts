import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService) {}

  public country: ICountry[] = [];
  public isLoading: boolean = false;

  searchByCapital(search: string):void {

    this.isLoading = true;
    this.countriesService.searchCapital(search).subscribe(countries => {
      this.country = countries;
      this.isLoading = false;
    })
  }


}
