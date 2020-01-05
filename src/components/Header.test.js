import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
    let expectedText =  "Tic Tac Toe";
    const {getByText} = render(<Header value={expectedText}/>);
    const linkElement = getByText(/Tic Tac Toe/i);
    expect(linkElement).toBeInTheDocument();
});
