import { init } from "./init";

export const appReducer = (state = { init }, action) => {
  // console.log("before", state);
  switch (action.type) {
    case "NAME_UPDATE":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "LOC_UPDATE":
      state = {
        ...state,
        loc: action.payload,
      };
      break;
  }

  // console.log("after", state);
  return state;
}; // export it to appStore.js to register it with reduxstore to make the appReducer function as a Reducer.
