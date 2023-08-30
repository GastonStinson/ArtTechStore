import { configureStore } from "@reduxjs/toolkit";
import  rootReducer  from "./sliceRoot";

export default configureStore({
  reducer: {
    rootReducer,
  },
});