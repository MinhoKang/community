import React from 'react';
import styles from '../styles/LoginModal.module.scss';
import googleLogo from '../../../assets/googleLogo.png';
import naverLogo from '../../../assets/naverLogo.png';
import kakaotalkLogo from '../../../assets/kakaotalkLogo.png';

const LoginModal = () => {
  return (
    <div className={`${styles.container}`}>
      <div>
        {/* form */}
        <form>
          <div className={`${styles.inputContainer}`}>
            <label>
              <div>이메일 주소</div>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                required
                autoFocus
                className={`${styles.input}`}
              />
            </label>
          </div>
          <div className={`${styles.inputContainer}`}>
            <label>
              <div>비밀번호</div>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                required
                className={`${styles.input}`}
              />
            </label>
          </div>
          <div className={`${styles.findIdPw}`}>로그인이 안 되시나요?</div>
          <div>
            <button className={`${styles.loginBtn}`}>로그인</button>
          </div>
        </form>
      </div>
      <div className={`${styles.divideLine}`}>또는</div>
      <div>
        {/* 로그인 선택 */}
        <div className={`${styles.signUpBtn}`}>
          <div className={`${styles.imgContainer}`}>
            <img src={googleLogo} alt="google-logo" />
          </div>
          구글 회원가입
        </div>
        <div className={`${styles.signUpBtn}`}>
          <div className={`${styles.imgContainer}`}>
            <img src={naverLogo} alt="google-logo" />
          </div>
          네이버 회원가입
        </div>
        <div className={`${styles.signUpBtn}`}>
          <div className={`${styles.imgContainer}`}>
            <img src={kakaotalkLogo} alt="google-logo" />
          </div>
          카카오톡 회원가입
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
