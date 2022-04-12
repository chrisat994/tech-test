
import { PAYMENT_HISTORY_ERROR, PAYMENT_HISTORY_SUCCESS } from "../../constants/actionTypes/types";
import http from '../../http/api_end_point'


export const getPaymentHistory = (filter: any) => (dispatch: any) => {

  http
    .get("payments?status=" + filter.status + "&page=" + filter.page)
    .then((response: any) => {
      dispatch({
        type: PAYMENT_HISTORY_SUCCESS,
        payload: response.data,
        status: response.status,
      });
    })
    .catch((err) => {
      dispatch({
        type: PAYMENT_HISTORY_ERROR,
        status: err.response.status,
        payload: err.response,
      });
    });
};
