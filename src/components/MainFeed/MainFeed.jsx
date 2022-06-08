import firebaseApp from '@config/firebaseApp';
import React, { useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import './css/index.css';

const Fstorage = firebaseApp.storage();

function uploadImageToFirebaseStorage(data, timestamp) {
  return new Promise((resolve, reject) => {
    Fstorage.ref(`feed/${timestamp}/feed.jpg`)
      .putString(data.split(',')[1], 'base64', {
        contentType: 'image/jpg'
      })
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log('이미지 업로드 완료');
            resolve(url);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function MainFeed() {
  const contextRef = useRef(null);
  const session = useSelector((state) => state.auth.session);
  const [context, setContext] = useState(undefined);
  const [feed_image, setFeed_image] = useState(undefined);

  const __makeFeed = useCallback(
    async (e) => {
      e.preventDefault();
      if (session && (context || feed_image)) {
        const nowTime = Date.now();
        let downloadUrl;
        if (feed_image) {
          //파이어베이스 스토리지에 이미지를 업로드한뒤, URL을 받아와서 fetch로 넘겨줘야 함
          //디비는 오브젝트만 넘겨줬지만 스토리지는 이미지의 이름,확장명도 정해줘야한다.
          downloadUrl = await uploadImageToFirebaseStorage(feed_image, nowTime).catch((err) => {
            console.log(err);
          });
        }
        const { uid } = session;
        let url = '/feed/new';

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Allow-Control-Access-Origin': '*'
          },
          body: JSON.stringify({
            feed: { context, image: downloadUrl, like: 0 },
            profile: { uid },
            timestamp: nowTime
          })
        })
          .then((res) => res.json())
          .then(({ msg }) => {
            contextRef.current.value = '';
            setContext(undefined);
            setFeed_image(undefined);
            alert(msg);
            console.log(msg);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [context, feed_image, session, contextRef]
  );

  const __getData64FromImage = useCallback((e) => {
    const filelist = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      // console.log(e.target.result);
      setFeed_image(e.target.result);
    };

    reader.readAsDataURL(filelist);
  }, []);

  return (
    <div className="mainfeed">
      <div className="wrapper">
        <div className="feed-list">
          <form className="write-feed" onSubmit={__makeFeed}>
            <div className="profile-image"></div>
            <div className="inp">
              <input
                ref={contextRef}
                type="text"
                placeholder="오늘 무슨 일이 있었나요?"
                onChange={(e) => setContext(e.target.value)}
              />
            </div>
            <div className="get-image">
              <label htmlFor="get-image-input">
                <img src="/assets/main/add-image.svg" alt="이미지 추가하기" />
              </label>
              <input id="get-image-input" type="file" onChange={__getData64FromImage} />
            </div>
          </form>

          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <dic className="nickname txt-bold">yongstar</dic>
                <div className="timestamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className="count" txt-bold>
                  25k
                </div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className="count" txt-bold>
                  2k
                </div>
              </div>
            </div>
          </div>

          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <dic className="nickname txt-bold">yongstar</dic>
                <div className="timestamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <div className="image"></div>
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className="count" txt-bold>
                  25k
                </div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className="count" txt-bold>
                  2k
                </div>
              </div>
            </div>
          </div>

          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <dic className="nickname txt-bold">yongstar</dic>
                <div className="timestamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className="count" txt-bold>
                  25k
                </div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className="count" txt-bold>
                  2k
                </div>
              </div>
            </div>
          </div>

          <div className="feed">
            <div className="top">
              <div className="profile-image"></div>
              <div className="profile-desc">
                <dic className="nickname txt-bold">yongstar</dic>
                <div className="timestamp">8:15 pm, yesterday</div>
              </div>
            </div>
            <div className="contents">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <div className="image"></div>
            </div>
            <div className="bottom">
              <div className="like">
                <div className="asset">
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className="count" txt-bold>
                  25k
                </div>
              </div>
              <div className="comment">
                <div className="asset">
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className="count" txt-bold>
                  2k
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="friend-list">
          <div className="my-profile">
            <div className="profile-image"></div>
            <div className="nickname" txt-bold>
              yongstar
            </div>
          </div>
          <div className="my-friends">
            <div className="title txt-bold">나의 친구</div>
            <ul className="friend-list-wrapper">
              <li className="friend">
                <div className="profile-image"></div>
                <div className="nickname" txt-bold>
                  일주어터
                </div>
              </li>
              <li className="friend">
                <div className="profile-image"></div>
                <div className="nickname" txt-bold>
                  카리나
                </div>
              </li>
              <li className="friend">
                <div className="profile-image"></div>
                <div className="nickname" txt-bold>
                  윈터
                </div>
              </li>
              <li className="friend">
                <div className="profile-image"></div>
                <div className="nickname" txt-bold>
                  랭커
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeed;
