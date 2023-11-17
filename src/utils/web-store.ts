import { Context, createWrapper } from "next-redux-wrapper";
import { RootState, reduxStore } from "../../lib/src";
import { Store } from "@reduxjs/toolkit";
//import { reduxStore } from "../../lib/src/state";

// create a makeStore function
const makeStore = (context: Context) => reduxStore;

// export an assembled wrapper
export const reduxStoreWrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });