import React, { createContext, useReducer } from 'react';

// types
import { CityProps, SourcesProps, SelectedLayerProps } from 'types';

interface State {
  cities: CityProps[];
  sources: SourcesProps[];
  selected: SelectedLayerProps | undefined;
}

type Action =
  | { type: 'setCities'; payload: CityProps[] }
  | { type: 'setSources'; payload: SourcesProps[] }
  | { type: 'setSelected'; payload: SelectedLayerProps };

const initialState: State = { cities: [], sources: [], selected: undefined };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setCities':
      return { ...state, cities: action.payload };
    case 'setSources':
      return { ...state, sources: action.payload };
    case 'setSelected':
      return { ...state, selected: action.payload };
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
