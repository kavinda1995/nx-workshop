import { render, screen } from '@testing-library/react';
import App from '../index';

test('renders POS App', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(<App />, { container: root });
    const headerElement = screen.getByText(/POS App/i);
    expect(headerElement).toBeInTheDocument();
});
