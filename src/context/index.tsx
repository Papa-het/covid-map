import React, { createContext, useReducer } from 'react';

// types
import { CityDataProps, SourcesProps } from 'types';

interface State {
  cities: CityDataProps[];
  sources: SourcesProps[];
}

type Action =
  | { type: 'setCities'; payload: CityDataProps[] }
  | { type: 'setSources'; payload: SourcesProps[] };

const initialState: State = { cities: [], sources: [] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setCities':
      return { ...state, cities: action.payload };
    case 'setSources':
      return { ...state, sources: action.payload };
    default:
      throw new Error();
  }
};

export const Store = createContext<{
  state: typeof initialState;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => ({})
});

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export { StoreProvider };
