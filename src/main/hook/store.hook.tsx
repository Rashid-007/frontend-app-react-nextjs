import { useContext } from "react";
import { StoreContext } from "../context";

/**
 * Hook to get: Mobx stores
 */
function useStores() {
  return useContext(StoreContext);
}

export { useStores };
