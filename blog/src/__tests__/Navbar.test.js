import { screen } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';
import { renderWithProviders } from '../utils/wrappertesting';

describe('Unit tests for navbar', () => {
  it('renders the navbar', () => {
    renderWithProviders(<Navbar />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('snapshot test to check it renders Navbar component', () => {
    const { asFragment } = renderWithProviders(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the logo', () => {
    renderWithProviders(<Navbar />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('checks lengths of list/menu items', () => {
    renderWithProviders(<Navbar />);
    const linksElement = screen.getAllByTestId('listitem');
    expect(linksElement.length).toBe(4); // home,featured,about,contact
  });

  // links check
  it('check link of home is correct', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
  });

  it('checks link of about is correct', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
  });
  it('checks link of login is correct', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Login')).toHaveAttribute('href', '/login');
  });

  it('check link of contact is correct', async () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contacts');
  });
//only rendered when user is logged in so comment fo now
  // it('checks link of Post creation page is correct', () => {
  //   renderWithProviders(<Navbar />);
  //   expect(screen.getByText('Post')).toHaveAttribute('href', '/createpost');
  // });
});
