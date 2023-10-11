import {render} from '@testing-library/react'
import * as userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom'

export const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup,
    ...render(ui, {wrapper: MemoryRouter}),
  }
}