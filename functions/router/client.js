const firebaseApp = require('../config/firebaseModule');
const express = require('express');
const cors = require('cors');

const Fauth = firebaseApp.auth();

const router = express.Router();
router.use(cors());
router.options('*', cors);

router.post('/user/new', (req, res, next) => {
  const { email, password } = req.body;

  Fauth.createUser({
    email: email,
    password: password
  })
    .then((credential) => {
      const { uid } = credential;
      //유저 프로플 디비 만들어서 디비저장
      res.status(200).json({
        msg: '유저가 만들어 졌습니다.'
      });
      console.log(uid);
    })
    .catch((err) => {
      res.status(400).json({
        err
      });
    });
});

router.get('/helloworld', (req, res, next) => {
  //   const email = 'asd@asd.com';
  //   const password = '12345678';

  //   Fauth.createUser({
  //     email: email,
  //     password: password
  //   })
  //     .then((credential) => {
  //       const { uid } = credential;
  //       console.log(uid);
  //     })
  //     .catch((err) => {
  //       err;
  //       console.log(err);
  //     });

  res.json({
    msg: 'helloworld'
  });
});
module.exports = router;
