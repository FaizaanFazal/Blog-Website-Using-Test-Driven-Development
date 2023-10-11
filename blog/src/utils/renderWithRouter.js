import { createMemoryHistory } from 'react-router-dom';

export function renderWithRouter(ui, options = {}) {
  const { history = createMemoryHistory(), ...otherOptions } = options;

  return render(ui, {
    wrapper: ({ children }) => <Router history={history}>{children}</Router>,
    ...otherOptions,
  });
}
