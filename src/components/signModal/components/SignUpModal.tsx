import styles from '../styles/SignUpModal.module.scss';
import googleLogo from '../../../assets/googleLogo.png';
import naverLogo from '../../../assets/naverLogo.png';
import kakaotalkLogo from '../../../assets/kakaotalkLogo.png';
const SignUpModal = () => {
  return (
    <div className={`${styles.modalMain}`}>
      <div className={`${styles.btnContainer}`} style={{ justifyContent: 'center' }}>
        <div className={`${styles.signUpBtn}`}>이메일 회원가입</div>
      </div>
      <div className={`${styles.divideLine}`}>또는</div>
      <div className={`${styles.btnContainer}`}>
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

export default SignUpModal;
