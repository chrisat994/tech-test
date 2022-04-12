import React from "react";
import { paymentItem } from "../../interfaces/valueobject";
type Props = {
  info: paymentItem
}

export const PaymentCard: React.FC<Props> = ({ info }) => {
  return (
    <div className="payment_card_wrapper">
      <div className="transaction_basic">
        <div><p className="tr_id">#{info.id}</p>
          <div className="tr_status"><p>Status: {info.status}</p></div>
        </div>
        <div><p className="tr_amount"> {info.currency + " " + info.amount}</p> </div>
      </div>
      <div className="transaction_details_wrapper mt-2">
        <div className="content_wrapper">
          <div className="label">Description</div>
          <div className="desc">{info.description}</div>
        </div>
        <div className="content_wrapper">
          <div className="date_time">
            {/* {Math.floor(new Date(info.createdAt).getDay())+"/"+Math.floor(new Date(info.createdAt).getMonth())+"/"+Math.floor(new Date(info.createdAt).getFullYear())} */}
            {info.createdAt}
            </div>
        </div>

      </div>
    </div>
  );
};
