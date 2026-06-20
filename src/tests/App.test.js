import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders random password generator heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /random password generator/i });
  expect(headingElement).toBeInTheDocument();
});
