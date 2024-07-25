import { init } from "./init";

export const appReducer = (currData = { init }, newData) => {
  return currData;
}; // export it to appStore.js to register it with reduxstore to make the appReducer function as a Reducer.
