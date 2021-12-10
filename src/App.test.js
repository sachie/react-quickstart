import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import messages from 'utils/messages';
import App from './App';
import store from './store';

test('renders title and readme link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText(messages.common.title)).toBeInTheDocument();
});
