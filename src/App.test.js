import { render, screen } from '@testing-library/react';
import App from './App';
import {sum} from './components/WidgetsAlt.js'
import {Check} from './components/Weather'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('should give a sum', () => {
  const result = sum(2,5);
  expect(result).toBe(7)
})
