import { PAYMENT_HISTORY_SUCCESS } from "../../constants/actionTypes/types";
const initialState = {
  payments: null
};

interface action {
  type: string,
  payload: any
}

export default function (state = initialState, actions: action) {
  switch (actions.type) {
    case PAYMENT_HISTORY_SUCCESS:
      return {
        ...state,
        payments: actions.payload,
      };
    default:
      return state;
  }
}
