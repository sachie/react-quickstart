import React from 'react';
import Spinner from 'assets/icons/logo.svg';
import styles from './reactLogo.module.scss';

const ReactLogo = () => {
  return <img className={styles.logo} src={Spinner} alt="Loader" />;
};

export default React.memo(ReactLogo);
