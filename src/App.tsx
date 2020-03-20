import React from 'react';

import { Header } from 'components/Header';
import { MapApp } from 'components/Map';
import { GlobalPanel } from 'components/GlobalPanel';

// styles
import { GlobalStyles } from './globalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <GlobalPanel />
      <MapApp />
    </div>
  );
};

export { App };
