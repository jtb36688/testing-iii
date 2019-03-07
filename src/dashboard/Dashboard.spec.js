import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from "react-test-renderer";
import Dashboard from './Dashboard'
import 'react-testing-library/cleanup-after-each';

// describe('<Dashboard /> elements all rendering', () => {
//     it('all components render without failing')
// })
describe('<Dashboard /> toggleClosed', () => {
    it('when this.state.locked is false, toggle this.state.closed when toggleClosed() button is clicked', () => {
        const { getByText, queryByText } = render(<Dashboard/>)
        fireEvent.click(getByText("Close Gate"))
        expect(queryByText(/closed/i)).toBeTruthy()
        fireEvent.click(getByText("Open Gate"))
        expect(queryByText(/closed/i)).toBeFalsy()
    })
    it('when this.state.locked is true, toggleClosed() button is not interactive', () => {
        const { getByText, queryByText } = render(<Dashboard/>)
        fireEvent.click(getByText("Close Gate"))
        fireEvent.click(getByText("Lock Gate"))
        expect(queryByText("Locked")).toBeTruthy()
        expect(queryByText(/closed/i)).toBeTruthy()
        fireEvent.click(getByText("Open Gate"))
        expect(queryByText(/closed/i)).toBeTruthy()
    })
})
describe('<Dashboard /> toggleLocked', () => {
    it('when this.state.closed is true, toggle this.state.locked when toggleLocked() button is clicked', () => {
        const { getByText, queryByText } = render(<Dashboard/>)
        fireEvent.click(getByText("Close Gate"))
        expect(queryByText(/closed/i)).toBeTruthy()
        fireEvent.click(getByText("Lock Gate"))
        expect(queryByText("Locked")).toBeTruthy()
        expect(queryByText("Unlocked")).toBeFalsy()
        fireEvent.click(getByText("Unlock Gate"))
        expect(queryByText("Locked")).toBeFalsy()
        expect(queryByText("Unlocked")).toBeTruthy()
    })
    it('when this.state.closed is false, toggleLocked() button is not interactive', () => {
        const { getByText, queryByText } = render(<Dashboard/>)
        expect(queryByText(/closed/i)).toBeFalsy()
        fireEvent.click(getByText("Lock Gate"))
        expect(queryByText("Locked")).toBeFalsy()
        expect(queryByText("Unlocked")).toBeTruthy()
    })
})
