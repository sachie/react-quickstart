import React from 'react';
import cx from 'classnames';
import ReactLogo from 'components/ReactLogo';
import constants from 'utils/constants';
import messages from 'utils/messages';
import pageStyles from 'pages/pages.module.scss';
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <div className={cx(pageStyles.container, styles.main) /* Example of class combining */}>
        <ReactLogo />
        <h2>{messages.common.title}</h2>
        <p>{messages.mainPage.getStarted}</p>
        <p>
          {messages.mainPage.visitThe}
          <a target="_blank" rel="noreferrer" href={constants.links.readme}>
            {messages.mainPage.readme}
          </a>
          {messages.mainPage.moreInfo}
        </p>
      </div>
    </>
  );
};

export default React.memo(Home);
