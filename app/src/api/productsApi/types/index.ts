interface IProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
}

export interface IProductsResponse {
    products: IProduct[];
}
