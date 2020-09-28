import React from "react";

import stores from "../store";

interface IProps {}

/**
 * Context for: Mobx stores
 */
const StoreContext = React.createContext(stores);

const StoreProvider: React.FC<IProps> = ({ children }) => {
  return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
