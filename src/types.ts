import { GeoJSON } from 'react-leaflet';

type Status = {
  id: number;
  infected: string;
  recovered: string;
  deaths: string;
  created_at: string;
  updated_at: string;
};

export interface CityProps {
  id: number;
  city: { city_name: string };
  data: GeoJSON.FeatureCollection;
  status: Status;
  created_at: string;
  updated_at: string;
}

export interface CountryProps {
  id: number;
  data: GeoJSON.MultiPolygon;
  created_at: string;
  updated_at: string;
}

export interface SourcesProps {
  id: number;
  geo: GeoJSON.FeatureCollection;
  city: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface GlobalDataProps {
  global_infected: string;
  global_recovered: string;
  global_deaths: string;
}

export interface CityDataProps {
  id: number;
  city_name: string;
  created_at: string;
  updated_at: string;
}
