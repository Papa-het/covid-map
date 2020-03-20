import { CityDataProps, SourcesProps } from 'types';

export interface SetCities {
  type: string;
  payload: CityDataProps[];
}

export interface SetSources {
  type: string;
  payload: SourcesProps[];
}
