import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const initialState = {};

// Used to handle unautherized access
const authInterceptor =
  ({ dispatch }: any) =>
    (next: any) =>
      (action: any) => {
        if (action.status === 401) {
        } else {
          next(action);
        }
      };
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware, authInterceptor)
  )
);

export default store;
