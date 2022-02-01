var admin = require('firebase-admin');

var serviceAccount = require('../service/serviceKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://yongstagram-p1-default-rtdb.firebaseio.com'
});

module.exports = admin;
