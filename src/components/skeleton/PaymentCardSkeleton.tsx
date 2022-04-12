import React from "react"
import Skeleton1 from "./paymentCards/Skeleton1"
import Skeleton2 from "./paymentCards/Skeleton2"

const PaymentCardSkeleton = () => (
    <div className="payment_card_wrapper">
      <div className="transaction_basic">
       <Skeleton1></Skeleton1>
       <Skeleton2></Skeleton2>
      </div>
     
    </div>
)

export default PaymentCardSkeleton