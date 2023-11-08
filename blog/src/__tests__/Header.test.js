import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { renderWithProviders } from '../utils/wrappertesting';

describe('Unit tests for Header', () => {
  it('Snapshot test for rendering navbar in header', () => {
    const { asFragment } = renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dom test for-> renders the navbar', () => {
    renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);
    const navbarElement = screen.getByTestId('header');
    expect(navbarElement).toBeInTheDocument();
  });

  it('Updates input value on change in search bar', () => {
    renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);
    const inputSearch = screen.getByTestId('inputSearch');
    fireEvent.change(inputSearch, { target: { value: 'test' } });
    expect(inputSearch.value).toBe('test');
  });

  it('Number of tags should be 3', () => {
    renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);
    const tagElements = screen.getAllByTestId('tag');
    expect(tagElements.length).toBe(3);
  });

  it('Checks if button is disabled if search bar is empty', () => {
    renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);
    const searchbtn = screen.getByText('Search');
    const inputSearch = screen.getByTestId('inputSearch');
    fireEvent.change(inputSearch, { target: { value: '' } });
    expect(searchbtn).toBeDisabled();
  });
});
