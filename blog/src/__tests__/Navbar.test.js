import { render, screen,fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

describe("",()=>{
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

  it('checks list length', () => {
    render(<Navbar />);
    const linksElement = screen.getAllByRole('listitem');
    expect(linksElement.length).toBe(5); //home,featured,about,contact,createpost
  });

  //links check
  it('navigates to home page', () => {
    render(<Navbar />);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });

  it('navigates to about page', () => {
    render(<Navbar />);
    expect(screen.getByText('About')).toHaveAttribute('href', '/about')
  });
  it('navigates to about page', () => {
    render(<Navbar />);
    expect(screen.getByText('Featured')).toHaveAttribute('href', '/featured')
  });

  it('navigates to contact page', () => {
    render(<Navbar />);
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact')
  });

  it('navigates to contact page', () => {
    render(<Navbar />);
    expect(screen.getByText('Post')).toHaveAttribute('href', '/createpost')
  });

})