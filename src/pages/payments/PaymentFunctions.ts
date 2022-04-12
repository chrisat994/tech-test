import { getPaymentHistory } from '../../redux/actions/paymentAction'

export const getPayments = (paymentfilter: string, page: number, dispatch: Function) => {
    dispatch(getPaymentHistory({ status: paymentfilter, page: page }))
}

export const filterChange = (paymentfilter: string, page: number, dispatch: Function) => {
    dispatch(getPaymentHistory({ status: paymentfilter, page: page }))
}