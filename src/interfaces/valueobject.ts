
export const paymentViewObj: paymentViewInterface = {
    totalNumberOfItems: 0,
    numberOfPages: 0,
    currentPage: 0,
    pageSize: 0,
    hasNext: true,
    items: [
        {
            id: "",
            amount: 0.0,
            currency: "",
            description: "",
            status: "",
            createdAt: ""
        },
    ]
};

export interface paymentViewInterface {
    totalNumberOfItems: number,
    numberOfPages: number,
    currentPage: number,
    pageSize: number,
    hasNext: boolean,
    items: [
        {
            id: string,
            amount: number,
            currency: string,
            description: string,
            status: string,
            createdAt: string
        },
    ]
}

export interface paymentItem {
    id: string,
    amount: number,
    currency: string,
    description: string,
    status: string,
    createdAt: string
}