import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  constructor( private countriesService: CountriesService){};

  public region: ICountry[] = [];

  public regions?: Region[] = ['Africa','Americas','Europe','Asia','Oceania'];

  public selectedRegion?: Region;

  ngOnInit(): void {
      this.region = this.countriesService.store.byRegion.countries;
      this.selectedRegion = this.countriesService.store.byRegion.region;
  }

  searchByRegion( region: Region ) {

    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(
      regions => this.region = regions
    )
  }

}
