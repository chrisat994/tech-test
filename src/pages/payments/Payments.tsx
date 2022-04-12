import React, { useEffect, useState, memo } from 'react'
import { Layout } from '../page_layout/Layout'

import { PaymentCard } from '../../components/cards/PaymentCard'
import { connect, useDispatch } from 'react-redux'
import { paymentViewInterface, paymentViewObj } from '../../interfaces/valueobject'
import Pagination from '../../components/pagination/Pagination'
import isEmpty from '../../validation/is-Empty'
import { getPayments } from './PaymentFunctions'
import PaymentCardSkeleton from '../../components/skeleton/PaymentCardSkeleton'
import PaymentFilter from '../../components/form/filter/PaymentFilter'
type Props = {
    payment: any
}
const noRender = (prevProps: any, nextProps: any) => {
    if (prevProps.payment !== nextProps.payment) {
        return false;
    }
    return true;
};

const Payments: React.FC<Props> = memo(({ payment }) => {
    const [payments, setPayments] = useState<paymentViewInterface>(paymentViewObj);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [paymentfilter, setPaymentFilter] = useState<string>("");
    const [page, setPage] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [perPage, setPerPage] = useState<number>(0);
    const dispatch = useDispatch();

    useEffect(() => {
        getPayments(paymentfilter, page, dispatch);
    }, []);
    useEffect(() => {
        if (payment) {
            setPerPage(payment.pageSize);
            setTotalCount(payment.totalNumberOfItems);
            setPayments(payment);
            setLoaded(true);
        }
    }, [payment]);
    useEffect(() => {
        if (loaded) {
            setLoaded(false);
            getPayments(paymentfilter, page, dispatch);
        }
    }, [page]);

    useEffect(() => {
        if (loaded) {
            getPayments(paymentfilter, 0, dispatch);
            setLoaded(false);
            setPage(0);
            setPerPage(0);
            setTotalCount(0);
        }
    }, [paymentfilter]);
    const changeFilter = (value: string) => {
        setPaymentFilter(value);
    }

    return (
        <Layout>
            <div className='container d-flex justify-content-center pt-4'>
                <div className='col-xl-6 col-lg-8  col-md-8 col-sm-12 col-xs-12' >
                    <div className='history_main_wrapper'>
                        <div className='head_wrapper'>
                            <h1 className='heading fw-700'>Payment History</h1>
                            <PaymentFilter loaded={loaded} paymentfilter={paymentfilter} changeFilters={(value: string) => changeFilter(value)}></PaymentFilter>
                        </div>
                        <div className='mt-4'>
                            {loaded ? payments.items.map((item, i) => (
                                <PaymentCard key={i} info={item}></PaymentCard>)
                            ) : [...Array(5)].map((_, i) => (
                                <PaymentCardSkeleton key={i}></PaymentCardSkeleton>
                            ))}
                        </div>
                    </div>
                    {
                        totalCount > perPage && !isEmpty(payments) ? (
                            <Pagination
                                currentPage={page + 1}
                                totalCount={totalCount}
                                pageSize={perPage}
                                onPageChange={(page: any) => setPage(page - 1)}
                                siblingCount={1}
                            />
                        ) : null
                    }
                </div>
            </div>
        </Layout>
    )
}, noRender)

const mapStateToProps = (state: any) => ({
    payment: state.paymentInfo.payments
})
export default connect(mapStateToProps)(Payments)
