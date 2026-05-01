import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * True on the client, false on the server — avoids hydration mismatches
 * without setState-in-effect.
 */
export function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
