import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import reduxStore from '../Redux/store';
import '@testing-library/jest-dom';

export * from '@testing-library/react';

const AllTheProviders = ({ children }) => (
  <Provider store={reduxStore}>
    {children}
  </Provider>
);

export const renderWithProvidersOnly = (ui, options) => render(<AllTheProviders>{ui}</AllTheProviders>, options);

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

renderWithProvidersOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
