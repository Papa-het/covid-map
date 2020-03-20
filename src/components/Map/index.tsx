import React, { useState, useEffect } from 'react';
import {
  Map,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  ZoomControl
} from 'react-leaflet';
import { axiosRequest } from 'utils/axios.config';
import { AxiosResponse } from 'axios';

// components
import { Popup } from 'components/Popup';

// helpers
import { citiesAdapter } from 'utils/helpers';

// types
import { CityProps, SourcesProps } from 'types';

// styles
import { MapContainer } from './style';

const MapApp = () => {
  const [country, setCountry] = useState(null);
  const [sources, setSources] = useState([]);
  const [cities, setCities] = useState<CityProps[]>([]);

  useEffect(() => {
    if (!country)
      axiosRequest
        .get('/countries')
        .then(({ data }) => setCountry(data[0].data));
    if (!sources.length)
      axiosRequest.get('/sources').then(({ data }) => setSources(data));
    if (!cities.length)
      axiosRequest
        .get('/geo-cities')
        .then(({ data }: AxiosResponse<CityProps[]>) => {
          const formatted = citiesAdapter(data);
          setCities(formatted);
        });
  }, [country, cities, sources]);

  return (
    <MapContainer>
      <Map
        center={[49, 75]}
        zoom={5}
        minZoom={5}
        maxZoom={16}
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {country && (
          <GeoJSON
            data={
              country || {
                type: 'Feature'
              }
            }
            color="lightblue"
            fillOpacity={0}
          />
        )}
        {cities && (
          <FeatureGroup>
            {cities.map((el: CityProps) => (
              <GeoJSON
                key={el.id}
                data={el.data}
                color="#cf3425"
                fillOpacity={0.1}
              >
                <Popup {...el} />
              </GeoJSON>
            ))}
          </FeatureGroup>
        )}
        {sources && (
          <FeatureGroup>
            {sources.map((el: SourcesProps) => (
              <GeoJSON
                key={el.id}
                data={el.geo}
                color="#cf3425"
                fillOpacity={0.5}
              />
            ))}
          </FeatureGroup>
        )}
        ƒ
      </Map>
    </MapContainer>
  );
};

export { MapApp };
