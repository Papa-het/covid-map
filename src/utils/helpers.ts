import { CityProps } from 'types';

export const cityItem = (city: CityProps) => ({
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
