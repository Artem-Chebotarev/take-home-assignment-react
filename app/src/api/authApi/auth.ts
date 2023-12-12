import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
    mutation Authenticate ($email: String!, $password: String!) {
        authenticate(email: $email, password: $password) {
            accessToken
            refreshToken
            expiresAt
        }
    } 
`;

export const REFRESH_SESSION = gql`
    mutation RefreshSession($accessToken: String!, $refreshToken: String!) {
        refreshSession(accessToken: $accessToken, refreshToken: $refreshToken) {
            accessToken
            refreshToken
            expiresAt
        }
    } 
`;
