import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { apolloApi } from './api/_instances/apolloApi.ts';
import App from './App.tsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ApolloProvider client={apolloApi}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
);
