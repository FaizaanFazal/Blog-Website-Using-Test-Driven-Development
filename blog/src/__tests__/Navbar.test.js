import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Unit tests for navbar', () => {
  it('renders the navbar', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('snapshot test to check it renders Navbar component', () => {
    const { asFragment } = render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the logo', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('checks lengths of list/menu items', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    const linksElement = screen.getAllByTestId('listitem');
    expect(linksElement.length).toBe(5); // home,featured,about,contact,createpost
  });

  // links check
  it('check link of home is correct', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
  });

  it('checks link of about is correct', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
  });
  it('checks link of login is correct', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('Login')).toHaveAttribute('href', '/login');
  });

  it('check link of contact is correct', async () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contacts');
  });

  it('checks link of Post creation page is correct', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByText('Post')).toHaveAttribute('href', '/createpost');
  });
});
