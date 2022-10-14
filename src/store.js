import { configureStore } from "@reduxjs/toolkit";
import Auth from "./features/Auth";

export default configureStore({
  reducer: {
    account: Auth,
  },
});
