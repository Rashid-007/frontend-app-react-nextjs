import { configure } from "mobx";

import browserStore from "./browser.store";

configure({
  enforceActions: "observed",
});

const stores = {
  browserStore,
};

export default stores;
