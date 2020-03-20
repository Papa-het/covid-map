import React, { useState } from 'react';
import { axiosRequest as axios } from 'utils/axios.config';

// types
import { GlobalDataProps } from 'types';

// styles
import {
  GlobalPanelWrapper,
  GlobalPanelItem,
  GlobalPanelItemCount,
  GlobalPanelItemTitle
} from './style';

const GlobalPanel = () => {
  const [global, setGlobal] = useState<GlobalDataProps>({
    global_infected: '0',
    global_recovered: '0',
    global_deaths: '0'
  });
  const [loaded, setLoaded] = useState(false);

  useState(() => {
    if (!loaded)
      axios.get('/data/1').then(({ data }) => {
        setLoaded(true);
        setGlobal(data);
      });
  });

  return (
    <GlobalPanelWrapper>
      <GlobalPanelItem>
        <GlobalPanelItemCount>{global.global_infected}</GlobalPanelItemCount>
        <GlobalPanelItemTitle>Заражено</GlobalPanelItemTitle>
      </GlobalPanelItem>
      <GlobalPanelItem>
        <GlobalPanelItemCount>{global.global_recovered}</GlobalPanelItemCount>
        <GlobalPanelItemTitle>Вылечено</GlobalPanelItemTitle>
      </GlobalPanelItem>
      <GlobalPanelItem>
        <GlobalPanelItemCount>{global.global_deaths}</GlobalPanelItemCount>
        <GlobalPanelItemTitle>Умерло</GlobalPanelItemTitle>
      </GlobalPanelItem>
    </GlobalPanelWrapper>
  );
};

export { GlobalPanel };
