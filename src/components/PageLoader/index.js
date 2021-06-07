import { memo } from 'react';
import Spinner from 'assets/images/spinner.gif';
import styles from './pageLoader.module.scss';

/**
 * Used as a placeholder with react Suspense, in App.js.
 */
const PageLoader = () => {
  return (
    <div className={styles.loader}>
      <img src={Spinner} alt="Loader" />
    </div>
  );
};

export default memo(PageLoader);
