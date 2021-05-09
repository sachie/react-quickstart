import { render, screen } from '@testing-library/react';
import Logo from 'assets/icons/logo.svg';
import ReactLogo from 'components/ReactLogo';

test('renders page loader', () => {
  render(<ReactLogo />);

  const logoElement = screen.getByAltText('Logo');
  expect(logoElement).toBeInTheDocument();
  expect(logoElement).toHaveAttribute('src', Logo);
});
