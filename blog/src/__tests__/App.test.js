import { render, screen } from '@testing-library/react';
import App from '../App';
import { Nav } from '../components/header/Nav';

describe("",()=>{
  it('renders the navbar', () => {
    render(<App />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders the logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('checks list length', () => {
    render(<App />);
    const linksElement = screen.getAllByRole('link');
    expect(linksElement.length).toBe(5); //home,featured,about,contact,createpost
  });

  //links check
  it('navigates to home page', () => {
    render(<Nav />);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });

  it('navigates to about page', () => {
    render(<Nav />);
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/about');
  });
  it('navigates to about page', () => {
    render(<Nav />);
    const aboutLink = screen.getByText('Featured');
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/featured');
  });

  it('navigates to contact page', () => {
    render(<Nav />);
    const contactLink = screen.getByText('Contact');
    fireEvent.click(contactLink);
    expect(window.location.pathname).toBe('/contact');
  });

})