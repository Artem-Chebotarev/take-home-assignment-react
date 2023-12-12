import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
    query {
        products {
            id
            title
            description
            price
            currency
        }
    } 
`;
