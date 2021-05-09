import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import messages from 'utils/messages';
import App from './App';

test('renders title and readme link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const titleElement = screen.getByText(messages.common.title);
  expect(titleElement).toBeInTheDocument();

  const linkElement = screen.getByText(messages.mainPage.readme);
  expect(linkElement).toBeInTheDocument();
});
