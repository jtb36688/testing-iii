import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Controls from './Controls'
import 'react-testing-library/cleanup-after-each';

describe('<Controls /> Open/Close mocking', () => {
    const toggleclose = jest.fn();
    it('should call the toggleClosed function passed as a prop', () => {
    const { getByText } = render(<Controls toggleClosed={toggleclose} />);
    fireEvent.click(getByText(/close/i))
    fireEvent.click(getByText(/close/i))
    fireEvent.click(getByText(/close/i))
    expect(toggleclose).toHaveBeenCalledTimes(3)
    })
    it('with this.state.closed = true, should call the toggleLocked function passed as a prop', () => {
    const togglelock = jest.fn();
    const closedstate = true
    const { getByText, queryByText } = render(<Controls toggleLocked={togglelock} closed={closedstate} />);
    expect(queryByText("Close Gate")).toBeFalsy
    fireEvent.click(getByText("Lock Gate"))
    fireEvent.click(getByText("Lock Gate"))
    fireEvent.click(getByText("Lock Gate"))
    expect(togglelock).toHaveBeenCalledTimes(3)
    })
})