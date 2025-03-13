const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: 'https://spirit-shop.com',
  issuerBaseURL: 'https://dev-oxzdh03osd2vleb1.us.auth0.com/',
  tokenSigningAlg: 'HS256'
});

module.exports = jwtCheck
