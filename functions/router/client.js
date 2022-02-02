const firebaseApp = require('../config/firebaseModule');
const express = require('express');
const cors = require('cors');

const Fauth = firebaseApp.auth();
const Fdatabase = firebaseApp.database();

const router = express.Router();
router.use(cors());
router.options('*', cors);

router.post('/user/new', (req, res, next) => {
  const { email, password, nickname } = req.body;

  Fauth.createUser({
    email: email,
    password: password,
    displayName: nickname
  })
    .then((credential) => {
      const { uid } = credential;
      //유저 프로플 디비 만들어서 디비저장
      //users/{uid}/profile/email,timestamp,nickname,

      Promise.all([
        Fdatabase.ref(`users/${uid}/profile`).set({
          email: email,
          nickname: nickname,
          timestamp: Date.now()
        }),
        Fdatabase.ref(`statics/nicknames/${uid}`).set(nickname)
      ])
        .then(() => {
          res.status(200).json({
            msg: '유저가 만들어 졌습니다.'
          });
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
    })
    .catch((err) => {
      res.status(400).json({
        err
      });
    });
});

router.post('/feed/new', (req, res, next) => {
  const { feed, profile, timestamp } = req.body;
  const { uid } = profile;

  Fdatabase.ref('feed')
    .push({
      feed,
      profile,
      timestamp
    })
    .then((snapshot) => {
      const fid = 'snapshot.key'; //무작위 키가 만들어진 후 그 키를 반환
      Fdatabase.ref(`users/${uid}/feed`) //유저가 본인의 글을 가져올때 필요
        .push({ fid: fid })
        .then(() => {
          res.status(200).json({
            msg: '피드가 생성되었습니다.'
          });
        })
        .catch((err) => {
          res.status(400).json({
            err
          });
        });
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
