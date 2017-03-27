interface AuthConfiguration {
    clientID: string,
    domain: string,
   fetchUsersUrl:string,
   oauthUrl : string
}

export const myConfig: AuthConfiguration = {
    clientID: 'k1KcHLpOsGRAH2UsGfHIiAOjd5W3eSOc',
    domain: 'gchat.au.auth0.com',
    fetchUsersUrl:"https://gchat.au.auth0.com/api/v2/users?per_page=50&search_engine=v2",
    oauthUrl : 'https://gchat.au.auth0.com/oauth/token'
};
