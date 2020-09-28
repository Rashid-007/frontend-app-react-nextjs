import React from "react";

import { LocalStorageWrapper } from "../utils/storage/local-storage-wrapper.class";

interface IProps {}

const localStorageInstance = new LocalStorageWrapper();

const LocalStorageContext = React.createContext<LocalStorageWrapper>(localStorageInstance);

const LocalStorageProvider: React.FunctionComponent<IProps> = (props) => {
  const { children } = props;

  return (
        <LocalStorageContext.Provider value={localStorageInstance}>
            {children}
        </LocalStorageContext.Provider>);
};

export { LocalStorageContext, LocalStorageProvider, localStorageInstance };

