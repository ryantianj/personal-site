import { render, screen } from '@testing-library/react';
import Hello from "./sections/Hello/Hello";

test('renders learn react link', () => {
  render(<Hello />);
  const linkElement = screen.getByText('Ryan Tian', {exact: false});
  expect(linkElement).toBeInTheDocument();
});
