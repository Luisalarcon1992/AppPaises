import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country';

type Region = 'Africa'|'Americas'|'Europe'|'Asia'|'Oceania';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  constructor( private countriesService: CountriesService){};

  public region: ICountry[] = [];

  public regions?: Region[] = ['Africa','Americas','Europe','Asia','Oceania'];

  public selectedRegion?: Region;

  searchByRegion( region: Region ) {

    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(
      regions => this.region = regions
    )
  }

}
