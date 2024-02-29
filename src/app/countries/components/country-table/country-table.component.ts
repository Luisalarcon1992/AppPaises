import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: [

  ]
})
export class CountryTableComponent {

  @Input()
  public countries: ICountry[] = [];



}
