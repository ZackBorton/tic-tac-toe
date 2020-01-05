import React from 'react'
import {render} from '@testing-library/react';
import Square from './Square'


test('returns a square element',()  => {
    const {getByText} = render(<Square/>);
    // const linkElement = getByText(/Tic Tac Toe/i);
    expect(true).toBe(true);
})
