import React, { useState } from 'react';
import styles from '../styles/SignModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

const SignModal = () => {
  const [activeTap, setActiveTap] = useState('');
  return (
    <div className={`${styles.bg}`}>
      <div className={`${styles.modal}`}>
        <div className={`${styles.modalHeader}`}>
          {/* 탭 */}
          <div className={`${styles.modalTap}`}>
            <div
              onClick={() => setActiveTap('login')}
              className={activeTap === 'login' ? styles.active : ''}
            >
              로그인
            </div>
            <div
              onClick={() => setActiveTap('signup')}
              className={activeTap === 'signup' ? styles.active : ''}
            >
              회원가입
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
        {activeTap === 'login' ? <LoginModal /> : <SignUpModal />}
        {/* <SignUpModal /> */}
      </div>
    </div>
  );
};

export default SignModal;
