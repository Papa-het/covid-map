import React, { useState, useEffect } from 'react';
import {
  Map,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  ZoomControl
} from 'react-leaflet';
import axios, { AxiosResponse } from 'axios';

// components
import { Popup } from 'components/Popup';

// helpers
import { citiesAdapter } from 'utils/helpers';

// types
import { CityProps } from 'types';

// styles
import { MapContainer } from './style';

const MapApp = () => {
  const [country, setCountry] = useState(null);
  const [cities, setCities] = useState<CityProps[]>([]);

  useEffect(() => {
    if (!country)
      axios
        .get('http://localhost:1337/countries')
        .then(({ data }) => setCountry(data[0].data));
    if (!cities.length)
      axios
        .get('http://localhost:1337/cities')
        .then(({ data }: AxiosResponse<CityProps[]>) => {
          const formatted = citiesAdapter(data);
          setCities(formatted);
        });
  }, [country, cities]);

  return (
    <MapContainer>
      <Map
        center={[49, 68]}
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
      </Map>
    </MapContainer>
  );
};

export { MapApp };
