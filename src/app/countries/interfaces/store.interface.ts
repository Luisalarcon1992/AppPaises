import { ICountry } from "./country";
import { Region } from "./region.type";

export interface IStore {
  byCapital: ITermCountries;
  byCountry: ITermCountries;
  byRegion: IRegionCountries;
}

export interface ITermCountries {
  term: string;
  countries: ICountry[];
}

export interface IRegionCountries {
  region?: Region;
  countries: ICountry[];
}
