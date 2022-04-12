import { combineReducers } from "redux";

import paymentReducer from "./paymentReducer";

export default combineReducers({
  paymentInfo: paymentReducer,
});
