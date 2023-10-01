import { render, screen,fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

describe("Unit tests for navbar",()=>{
  it('renders the navbar', () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders the logo', () => {
    render(<Navbar />);
    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('checks lengths of list/menu items', () => {
    render(<Navbar />);
    const linksElement = screen.getAllByRole('listitem');
    expect(linksElement.length).toBe(5); //home,featured,about,contact,createpost
  });

  //links check
  it('check link of home', () => {
    render(<Navbar />);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });

  it('checks link of about', () => {
    render(<Navbar />);
    expect(screen.getByText('About')).toHaveAttribute('href', '/about')
  });
  it('checks link of featured', () => {
    render(<Navbar />);
    expect(screen.getByText('Featured')).toHaveAttribute('href', '/featured')
  });

  it('check link of contact', () => {
    render(<Navbar />);
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact')
  });

  it('checks link of Post creation page', () => {
    render(<Navbar />);
    expect(screen.getByText('Post')).toHaveAttribute('href', '/createpost')
  });

})