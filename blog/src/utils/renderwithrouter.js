import React from 'react'
import {render} from '@testing-library/react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'

// render function with Router wrapper from @reach/router
export function renderWithRouterWrapper(
  ui,
  {route = '/', history = createHistory(createMemorySource(route))} = {},
) {
  return {
    ...render(
      <LocationProvider history={history}>
        <Router>{ui}</Router>
      </LocationProvider>,
    ),
    history,
  }
}