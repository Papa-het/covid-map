import React from 'react';
import { MapApp } from 'components/Map';
import { CitiesPanel } from 'components/CitiesPanel';

const App = () => {
  return (
    <div>
      <MapApp />
      <CitiesPanel />
    </div>
  );
};

export { App };
