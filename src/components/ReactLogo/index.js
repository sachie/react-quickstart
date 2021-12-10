import { memo } from 'react';
import Logo from 'assets/icons/logo.svg';
import styles from './reactLogo.module.scss';

const ReactLogo = ({ ...props }) => {
  return <img className={styles.logo} src={Logo} alt="Logo" {...props} />;
};

export default memo(ReactLogo);
