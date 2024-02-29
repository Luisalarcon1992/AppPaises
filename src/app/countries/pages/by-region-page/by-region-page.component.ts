import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  constructor( private countriesService: CountriesService){}

  public region: ICountry[] = [];

  searchByRegion( region: string ) {
    this.countriesService.searchRegion(region).subscribe(
      regions => this.region = regions
    )
  }

}
