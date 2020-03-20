import React, { useContext, useEffect } from 'react';
import { axiosRequest } from 'utils/axios.config';

// context
import { Store } from 'context';

// styles
import { PanelWrapper, PanelTitle, PanelItem } from './style';

const CitiesPanel = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (!state.cities.length)
      axiosRequest
        .get('/cities')
        .then(({ data }) => dispatch({ type: 'setCities', payload: data }));
    if (!state.sources.length)
      axiosRequest
        .get('/sources')
        .then(({ data }) => dispatch({ type: 'setSources', payload: data }));
  }, [dispatch, state.cities, state.sources]);
  return (
    <PanelWrapper>
      <PanelTitle>Города</PanelTitle>
      {state.cities &&
        state.cities.map(city => (
          <PanelItem key={city.id}>{city.city_name}</PanelItem>
        ))}
      <PanelTitle style={{ marginTop: 30 }}>Очаги</PanelTitle>
      {state.sources &&
        state.sources.map(source => (
          <PanelItem
            key={source.id}
          >{`${source.city} - ${source.address}`}</PanelItem>
        ))}
    </PanelWrapper>
  );
};

export { CitiesPanel };
