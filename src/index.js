import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, compose } from 'redux';
import App from 'App';
import rootReducer from 'reducers';
import constants from 'utils/constants';

import './assets/styles/index.scss';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={constants.paths.home} component={App} />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
