import React from 'react';
import { render } from '@testing-library/react';
import { App } from 'components/App';

test('renders learn react link', () => {
    const { getByText } = render(<App classes={{}} login={() => {}} />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
