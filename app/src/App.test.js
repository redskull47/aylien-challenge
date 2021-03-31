import { render } from '@testing-library/react';
import App from './App';

test('renders Front end challenge header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Front end challenge/i);
  expect(linkElement).toBeInTheDocument();
});
