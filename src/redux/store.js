import { configureStore } from "@reduxjs/toolkit";
import {certificatesReducer} from "./slices/certificates.js";


const store = configureStore({
  reducer: {
    certificates: certificatesReducer,
  },
});

export default store;

