import React from 'react';

// types
import { CityProps } from 'types';

// styles
import { PopupWrapper, PopupContent, Block, CityBlockName } from './style';

const Popup = (props: CityProps) => {
  return (
    <PopupWrapper>
      <PopupContent>
        <Block>
          Город - <CityBlockName>{props.name}</CityBlockName>
        </Block>
        <Block style={{ color: 'red' }}>
          Заражено - <CityBlockName>{props.status.infected}</CityBlockName>
        </Block>
        <Block style={{ color: 'green' }}>
          Вылечено - <CityBlockName>{props.status.recovered}</CityBlockName>
        </Block>
        <Block style={{ color: 'gray' }}>
          Умерло - <CityBlockName>{props.status.deaths}</CityBlockName>
        </Block>
      </PopupContent>
    </PopupWrapper>
  );
};

export { Popup };
