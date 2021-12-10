import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import ReactLogo from 'components/ReactLogo';
import constants from 'utils/constants';
import messages from 'utils/messages';
import { increment } from './homeSlice';
import pageStyles from 'pages/pages.module.scss';
import styles from './home.module.scss';

const Home = () => {
  const count = useSelector(({ home }) => home.value);
  const dispatch = useDispatch();

  return (
    <div className={cx(pageStyles.container, styles.main) /* Example of class combining */}>
      <ReactLogo onClick={() => dispatch(increment())} />
      <h2>{messages.common.title}</h2>
      <p>{messages.mainPage.getStarted}</p>
      <p>
        {messages.mainPage.visitThe}
        <a target="_blank" rel="noreferrer" href={constants.links.readme}>
          {messages.mainPage.readme}
        </a>
        {messages.mainPage.moreInfo}
      </p>
      <div data-testid="count" hidden>
        {count}
      </div>
    </div>
  );
};

export default memo(Home);
