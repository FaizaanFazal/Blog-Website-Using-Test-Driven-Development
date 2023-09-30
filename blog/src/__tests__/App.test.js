import { render, screen } from '@testing-library/react';
import App from '../App';

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

  it('renders the links', () => {
    render(<App />);
    const linksElement = screen.getAllByRole('link');
    expect(linksElement.length).toBe(5); //home,featured,about,contact,createpost
  });

})