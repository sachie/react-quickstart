import { render, screen } from '@testing-library/react';
import Spinner from 'assets/images/spinner.gif';
import PageLoader from 'components/PageLoader';

test('renders page loader', () => {
  render(<PageLoader />);

  const spinnerElement = screen.getByAltText('Loader');
  expect(spinnerElement).toBeInTheDocument();
  expect(spinnerElement).toHaveAttribute('src', Spinner);
});
