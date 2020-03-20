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
  name: string;
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
