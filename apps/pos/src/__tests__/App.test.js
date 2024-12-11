import { render, screen } from '@testing-library/react';
import App from '../index';

test('renders POS App', () => {
    render(<App />);
    const headerElement = screen.getByText(/POS App/i);
    expect(headerElement).toBeInTheDocument();
});
