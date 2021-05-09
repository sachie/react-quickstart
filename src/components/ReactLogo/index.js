import React from 'react';
import Logo from 'assets/icons/logo.svg';
import styles from './reactLogo.module.scss';

const ReactLogo = () => {
  return <img className={styles.logo} src={Logo} alt="Logo" />;
};

export default React.memo(ReactLogo);
