import React from 'react';
import {render} from '@testing-library/react';
import GameTitle from './GameTitle';

test('renders learn react link', () => {
    let expectedText = "Tic Tac Toe";
    const {getByText} = render(<GameTitle value={expectedText}/>);
    const linkElement = getByText(/Tic Tac Toe/i);
    expect(linkElement).toBeInTheDocument();
});
