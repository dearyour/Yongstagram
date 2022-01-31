import React from 'react';
import './css/index.css';

function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/welcome/logo.svg" alt="로고" />
        </div>
        <form className="login-contents">
          <div className="email-inp custom-inp">
            <div className="title txt-bold">이메일</div>
            <div className="inp">
              <input type="email" placeholder="이메일을 입력해주세요" required />
            </div>
          </div>
          <div className="password-inp custom-inp">
            <div className="title txt-bold">비밀번호</div>
            <div className="inp">
              <input type="password" placeholder="비밀번호를 입력해주세요" required />
            </div>
          </div>
          <button className="login-btn" type="submit">
            로그인 하기
          </button>
        </form>
        <div className="go-join">
          <div className="title txt-bold">또는 회원 가입하기</div>
          <div className="asset">
            <img src="/assets/welcome/arrow.svg" alt="회원가입하기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
