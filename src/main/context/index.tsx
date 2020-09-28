import React from "react";

import { StoreContext, StoreProvider } from "./store.context";
import { LocalStorageContext, LocalStorageProvider } from "./local-storage.context";
import { SessionStorageContext, SessionStorageProvider } from "./session-storage.context";

interface IProps {}

const OverallProvider: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <StoreProvider>
      <LocalStorageProvider>
        <SessionStorageProvider>{children}</SessionStorageProvider>
      </LocalStorageProvider>
    </StoreProvider>
  );
};

export { OverallProvider, StoreContext, LocalStorageContext, SessionStorageContext };
