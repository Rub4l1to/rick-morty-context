import { render, screen } from '@testing-library/react';

// To Test
import App from '../screens/App';

test('Renders main page correctly', async () => {
  render(<App />);
});
