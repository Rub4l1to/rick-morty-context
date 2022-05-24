import { render, screen } from '@testing-library/react';

// To Test
import App from '../../src/screens/App';

test('Renders main page correctly', async () => {
  render(<App />);
});
