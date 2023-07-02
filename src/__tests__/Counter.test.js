import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/Counter"
import '@testing-library/jest-dom'

test('Rendering counter correctly', () => {
    render(<Counter />)
    const title = screen.getByText(/counter/i)
    expect(title).toBeInTheDocument();
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/count is/i)
    fireEvent.click(btn)

})