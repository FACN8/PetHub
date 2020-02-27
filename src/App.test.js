import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders start frame', () => {
  const { getByText } = render(<App />);
  getByText(/PetHub/i);
});
