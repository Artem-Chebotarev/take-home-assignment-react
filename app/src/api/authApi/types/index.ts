export interface ILoginResponse {
    authenticate: {
        accessToken: string;
        refreshToken: string;
        expiresAt: string;
    };
}
