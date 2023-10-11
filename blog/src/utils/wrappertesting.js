import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import reduxStore from '../Redux/store';
import '@testing-library/jest-dom';

export * from '@testing-library/react';

const AllTheProviders = ({ children }) => (
  <Provider store={reduxStore}>
    <MemoryRouter>{children}</MemoryRouter>
  </Provider>
);

export const renderWithProviders = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// export function renderWithProviders(
//   ui,
//   {
//     // preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = reduxStore,
//     ...renderOptions
//   } = {},
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

renderWithProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
