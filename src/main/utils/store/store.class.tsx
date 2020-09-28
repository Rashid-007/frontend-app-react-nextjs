import { LocalStorageWrapper } from "../storage/local-storage-wrapper.class";
import { SessionStorageWrapper } from "../storage/session-storage-wrapper.class";
import { sessionStorageInstance } from "../../context/session-storage.context";
import { localStorageInstance } from "../../context/local-storage.context";

export abstract class Store {
  protected localStorage: LocalStorageWrapper;
  protected sessionStorage: SessionStorageWrapper;

  constructor() {
    this.localStorage = localStorageInstance;
    this.sessionStorage = sessionStorageInstance;
  }
}
