import React, { useContext, useEffect } from 'react';
import { axiosRequest } from 'utils/axios.config';

// context
import { Store } from 'context';

// types
import { SelectedLayerProps } from 'types';

// styles
import { PanelWrapper, PanelTitle, PanelItem } from './style';

const CitiesPanel = () => {
  const { state, dispatch } = useContext(Store);

  const handleSelect = (layer: SelectedLayerProps) =>
    dispatch({ type: 'setSelected', payload: layer });

  useEffect(() => {
    if (!state.cities.length)
      axiosRequest
        .get('/geo-cities')
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
          <PanelItem
            key={city.id}
            onClick={() => handleSelect({ id: city.id, data: city.data })}
          >
            {city.city.city_name}
          </PanelItem>
        ))}
      <PanelTitle style={{ marginTop: 30 }}>Очаги</PanelTitle>
      {state.sources &&
        state.sources.map(source => (
          <PanelItem
            key={source.id}
            onClick={() => handleSelect({ id: source.id, data: source.data })}
          >{`${source.city} - ${source.address}`}</PanelItem>
        ))}
    </PanelWrapper>
  );
};

export { CitiesPanel };
