import React from 'react'
import filter from '../../../assets/icons/icon_filter.svg'
type Props = {
    loaded: boolean,
    paymentfilter: string,
    changeFilters: Function,
}

export default function PaymentFilter({ loaded, paymentfilter, changeFilters }: Props) {
    return (
        <div className='filter_wrapper'>
            <img
                src={filter}
                alt="filter"
                className='filter_icon'
            />
            <select className="form-select filter_select" aria-label="Filter" disabled={!loaded} value={paymentfilter} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeFilters(e.target.value)}>
                <option value="">Select Filter</option>
                <option value="CREATED">Created</option>
                <option value="FAILED">Failed</option>
                <option value="SETTLED">Settled</option>
                <option value="CAPTURED">Captured</option>

            </select>
        </div>
    )
}
