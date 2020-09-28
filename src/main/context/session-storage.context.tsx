import React from "react";

import { SessionStorageWrapper } from "../utils/storage/session-storage-wrapper.class";

interface IProps {}

const sessionStorageInstance = new SessionStorageWrapper();

const SessionStorageContext = React.createContext<SessionStorageWrapper>(sessionStorageInstance);

const SessionStorageProvider: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <SessionStorageContext.Provider value={sessionStorageInstance}>
        {children}
    </SessionStorageContext.Provider>);
};

export { SessionStorageContext, SessionStorageProvider, sessionStorageInstance };
