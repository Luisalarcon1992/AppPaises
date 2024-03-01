import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  constructor(private countriesService: CountriesService) {}

  public country: ICountry[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  ngOnInit(): void {
      this.country = this.countriesService.store.byCapital.countries;
      this.initialValue = this.countriesService.store.byCapital.term;
  }

  searchByCapital(search: string):void {

    this.isLoading = true;
    this.countriesService.searchCapital(search).subscribe(countries => {
      this.country = countries;
      this.isLoading = false;
    })
  }


}
