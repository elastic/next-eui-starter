import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from 'react';

import { setInitialTheme } from '../lib/theme';

/**
 * React context for storing theme-related data and callbacks.
 * `colorMode` is `light` or `dark` and will be consumed by
 * various downstream components, including `EuiProvider`.
 */
export const GlobalProvider = createContext<{
  colorMode?: string;
  setColorMode?: (colorMode: string) => void;
}>({});

export const Provider: FunctionComponent = ({ children }) => {
  const initialTheme = setInitialTheme();
  const [colorMode, setColorMode] = useState(initialTheme);
  return (
    <GlobalProvider.Provider value={{ colorMode, setColorMode }}>
      {children}
    </GlobalProvider.Provider>
  );
};

export const useProvider = () => {
  return useContext(GlobalProvider);
};
