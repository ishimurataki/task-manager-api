const got = require('got');

const credentials = {
    client: {
        id: 'YOUR_CLIENT_ID',
        secret: 'YOUR_CLIENT_SECRET',
    },
    auth: {
        tokenHost: 'https://idfs.gs.com',
        authorizePath: '/as/authorization.oauth2',
        tokenPath: '/as/token.oauth2?scope=read_content read_financial_data read_product_data read_user_profile',
    }
};

const getDataSets = (t) => {
    const opts = { headers: { Authorization: 'Bearer ' + t.token.access_token, "Content-Type": "application/json" } };
    return got('https://api.marquee.gs.com/v1/users/self', opts)
        .then(r => r.body)
    ;
};

const oauth2 = require('simple-oauth2').create(credentials);

oauth2.clientCredentials
    .getToken({})
    .then(r => oauth2.accessToken.create(r))
    .then(getDataSets)
    .then(console.log, console.error);