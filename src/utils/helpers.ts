import { CityProps, SourcesProps } from 'types';

const cityItem = (city: CityProps) => ({
  ...city,
  data: {
    ...city.data,
    features: city.data.features.map(el => ({
      ...el,
      properties: {
        ...el.properties,
        infected: city.status.infected,
        recovered: city.status.recovered,
        deaths: city.status.deaths
      }
    }))
  }
});

export const citiesAdapter = (list: CityProps[]) =>
  list.map(el => cityItem(el));

const sourceItem = (source: SourcesProps) => ({
  ...source,
  geo: {
    ...source.geo,
    features: source.geo.features.map(el => ({
      ...el,
      properties: {
        ...el.properties,
        city: source.city,
        address: source.address
      }
    }))
  }
});

export const sourcesAdapter = (list: SourcesProps[]) =>
  list.map(el => sourceItem(el));
