import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { authMiddleware } from './middlewares/authMiddleware';
import { refreshLink } from './middlewares/refreshTokensMiddleware';
import { API_URL } from '../../shared/consts/consts';

export const httpLink = new HttpLink({ uri: API_URL });

export const apolloApi = new ApolloClient({
    link: from([refreshLink, authMiddleware, httpLink]),
    cache: new InMemoryCache({}),
});
