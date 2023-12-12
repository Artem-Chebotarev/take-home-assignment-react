import { fromPromise } from "@apollo/client";
import { onError } from '@apollo/client/link/error';
import { ILoginResponse } from "../../authApi/types";
import { ACCESS_TOKEN, API_URL, EXPIRES_AT, REFRESH_TOKEN, SESSION_EXPIRED } from "../../../shared/consts/consts";

/*
    If we use token in a real app, we should be able to detect when our token is about to expire or if it is already expired.
    Therefore, we do not need to make a request that will always fail with 'SESSION_EXPIRED'.
    We can implement something like this:

    ```const isAccessExpired = accessExpirationDate ? accessExpirationDate <= (Date.now() + TOKEN_EXPIRATION_MARGIN) / 1000 : true;
       const isRefreshExpired = refreshExpirationDate ? refreshExpirationDate <= (Date.now() + TOKEN_EXPIRATION_MARGIN) / 1000 : true;

        // If only accessToken is expired
        if (isAccessExpired && !isRefreshExpired && refreshToken) {
          const { data } = await refreshTokens({
            variables: { input: { refreshToken } },
          });


          if (data) {
            tokenInUse = data.auth.refresh.access.value;
            accessExpirationDate =
              parseToken(data.auth.refresh.access.value)?.exp || 0;
            refreshExpirationDate = parseToken(
              data.auth.refresh.refresh.value,
            )?.exp;

            setTokens(data);
        }
    ```
    Advantages that I see: 
     - If the access token is about to expire (isAccessExpired), it will request a access token without stopping the current query. Which should be invisible to your user
     - If the access token is already expired, it will refresh the token and wait for the response to update it. Much faster than waiting for the error back
     - No need to have access to onError, so we can use ApolloSetup and use useMutation(REFRESH_SESSION) there (no need to write fetch like I did below)
*/
export const refreshLink = onError (({ operation, graphQLErrors, forward }) => {
    if (graphQLErrors) {
        if (graphQLErrors.some(
            (({ extensions: { code } }) => [SESSION_EXPIRED].includes(code as string))
        )) {
            const getNewTokens = async () => {
                const accessToken = localStorage.getItem(ACCESS_TOKEN);
                const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    
                const response = await fetch(API_URL,
                 { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }, 
                    body: JSON.stringify({
                        query: `
                          mutation {
                            refreshSession(accessToken: "${accessToken}" refreshToken: "${refreshToken}") {
                              accessToken
                              refreshToken
                              expiresAt
                            }
                          }
                        `,
                      }),
                });
    
                const responseJson = await response.json();

                const {
                    accessToken: newAccessToken, 
                    refreshToken: newRefreshToken, 
                    expiresAt: newExpiresAt, 
                } = responseJson.data.refreshSession as ILoginResponse['authenticate'];

                return { accessToken: newAccessToken, refreshToken: newRefreshToken, expiresAt:  newExpiresAt};
            }

            return fromPromise(
                getNewTokens()
              )
               .flatMap((value) => {
                    localStorage.setItem(ACCESS_TOKEN, value.accessToken);
                    localStorage.setItem(REFRESH_TOKEN, value.refreshToken);
                    localStorage.setItem(EXPIRES_AT, value.expiresAt);
                    
                    return forward(operation);
              });
        }
    }
    return forward(operation)
});
