import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import store from 'store';
import messages from 'utils/messages';
import Home from './index';

test('renders title and readme link', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  expect(screen.getByText(messages.common.title)).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.getStarted)).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.visitThe, { exact: false })).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.readme)).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.moreInfo, { exact: false })).toBeInTheDocument();
  expect(screen.getByText(messages.mainPage.moreInfo, { exact: false })).toBeInTheDocument();

  const countElement = screen.getByTestId('count');
  const logoElement = screen.getByAltText('Logo');
  expect(countElement).toHaveTextContent('0');
  logoElement.click();
  await waitFor(() => {
    expect(countElement).toHaveTextContent('1');
  });
  logoElement.click();
  await waitFor(() => {
    expect(countElement).toHaveTextContent('2');
  });
});
