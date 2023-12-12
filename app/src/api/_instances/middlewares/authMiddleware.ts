import { ApolloLink } from '@apollo/client';
import { ACCESS_TOKEN } from '../../../shared/consts/consts';

const LIST_IGNORED_OPERATIONS = ["Authenticate"];

export const authMiddleware = new ApolloLink((operation, forward) => {
    if (LIST_IGNORED_OPERATIONS.indexOf(operation.operationName) === - 1) {
        // Add the authorization to the headers
        operation.setContext(({ headers = {} }) => ({
            headers: {
            ...headers,
            authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : null,
            }
        }));
    }
    
    return forward(operation);
  })
