import React from 'react';

// context
import { StoreProvider } from 'context';

// components
import { Header } from 'components/Header';
import { MapApp } from 'components/Map';
import { GlobalPanel } from 'components/GlobalPanel';
import { CitiesPanel } from 'components/CitiesPanel';

// styles
import { GlobalStyles } from './globalStyles';

const App = () => {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Header />
      <MapApp />
      <GlobalPanel />
      <CitiesPanel />
    </StoreProvider>
  );
};

export { App };
